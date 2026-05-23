#pragma once

#include "../dto/SubmissionRequest.h";
#include "../engines/risk/RiskEngine.h";
#include "../database/SubmissionRepository.h";
#include "../models/Submission.h";
#include "../behavior/BehaviorEngine.h";

#include <json/json.h>

class SubmissionService
{
    private:
        RiskEngine riskEngine;
        SubmissionRepository repository;
        BehaviorEngine behaviorEngine;

    public:
        Json::Value analyzeSubmission(
            const SubmissionRequest &request){
            int riskScore = riskEngine.calculateRiskScore(request.pasteRatio);

            int behaviorScore = behaviorEngine.calculateBehaviorEngine(
                    request.typingSpeed,
                    request.submissionTimeSeconds,
                    request.suspiciousPasteBurst);
            int finalScore = riskScore + behaviorScore;

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

            response["userId"] = request.userId;
            response["language"] = request.language;
            response["pasteRatio"] = request.pasteRatio;
            response["typingSpeed"] = request.typingSpeed;
            response["submissionTimeSeconds"] =  request.submissionTimeSeconds;
            response["behaviorScore"] =  behaviorScore;
            response["riskScore"] = finalScore;
            response["flagged"] = flagged;
            response["message"] =  "Submission analyzed and stored successfully";
            return response;
        }
};
