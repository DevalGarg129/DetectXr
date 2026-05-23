#pragma once

#include "../dto/SubmissionRequest.h";
#include "../engines/risk/RiskEngine.h";
#include "../database/SubmissionRepository.h";
#include "../models/Submission.h";

#include <json/json.h>

class SubmissionService{
    private:
        RiskEngine riskEngine;
        SubmissionRepository repository;

    public:
        Json::Value analyzeSubmission(const SubmissionRequest& request){
            int riskScore = riskEngine.calculateRiskScore(request.pasteRatio);
            bool flagged = riskEngine.isFlagged(riskScore);

            Submission submission;
            submission.userId = request.userId;
            submission.language = request.language;
            submission.pasteRatio = request.pasteRatio;
            submission.riskScore = riskScore;
            submission.flagged = flagged;

            repository.saveSubmission(submission);
            Json::Value response;
            response["userId"] = request.userId;
            response["language"] = request.language;
            response["pasteRatio"] = request.pasteRatio;
            response["riskScore"] = riskScore;
            response["flagged"] = flagged;
            response["message"] = "Submission analyzed and stored successfully";
            return response;
    }
};



