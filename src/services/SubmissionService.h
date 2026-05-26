#pragma once

#include "../dto/SubmissionRequest.h"
#include "../database/SubmissionRepository.h"
#include "../engines/behavior/BehaviorEngine.h"
#include "../engines/similarity/SimilarityEngine.h"
#include "../engines/risk/RiskEngine.h"
#include "../models/Submission.h"

#include <json/json.h>

class SubmissionService
{
private:
    RiskEngine riskEngine;
    SubmissionRepository repository;
    BehaviorEngine behaviorEngine;
    SimilarityEngine similarityEngine;

public:
    Json::Value analyzeSubmission(
        const SubmissionRequest &request)
    {
        int riskScore = riskEngine.calculateRiskScore(request.pasteRatio);

        int behaviorScore = behaviorEngine.calculateBehaviorEngine(
            request.typingSpeed,
            request.submissionTimeSeconds,
            request.suspiciousPasteBurst);
        
        std::string historicalCode =
            "int main() { return 0; }";

        double similarityScore =
            similarityEngine.calculateSimilarity(
                request.sourceCode,
                historicalCode);

        int similarityRisk = 0;

        if (similarityScore >= 0.7)
        {
            similarityRisk = 50;
        }
        else if (similarityScore >= 0.4)
        {
            similarityRisk = 25;
        }
        
        int finalScore = riskScore + behaviorScore + similarityRisk;
        bool flagged = finalScore >= 60;

        Submission submission;
        submission.userId = request.userId;
        submission.sourceCode = request.sourceCode;
        submission.language = request.language;
        submission.pasteRatio = request.pasteRatio;
        submission.riskScore = finalScore;
        submission.flagged = flagged;

        repository.saveSubmission(submission);
        Json::Value response;

        response["behaviorScore"] = behaviorScore;
        response["similarityScore"] = similarityScore;
        response["similarityRisk"] = similarityRisk;
        response["riskScore"] = finalScore;
        response["flagged"] = flagged;
        return response;
    }
};
