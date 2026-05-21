#pragma once

#include "../dto/SubmissionRequest.h";
#include "../engines/risk/RiskEngine.h";

#include <json/json.h>

class SubmissionService{
    private:
        RiskEngine riskEngine;

    public:
        Json::Value analyzeSubmission(const SubmissionRequest& request){
            int riskScore = riskEngine.calculateRiskScore(request.pasteRatio);
            bool flagged = riskEngine.isFlagged(riskScore);
            Json::Value response;

            response["userId"] = request.userId;
            response["language"] = request.language;
            response["pasteRatio"] = request.pasteRatio;

            response["riskScore"] = riskScore;
            response["flagged"] = flagged;

            return response;
    }
};



