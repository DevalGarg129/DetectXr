#pragma once

#include "../dto/SubmissionRequest.h"
#include "../services/SubmissionService.h"

#include <drogon/HttpController.h>

using namespace drogon;

class SubmissionController
        : public drogon::HttpController<SubmissionController> {

private:
    SubmissionService service;
public:
    METHOD_LIST_BEGIN
    ADD_METHOD_TO(
            SubmissionController::analyzeSubmission,
            "/api/submission/analyze",
            Post);
    METHOD_LIST_END

    void analyzeSubmission(
            const HttpRequestPtr& req,
            std::function<void(
                    const HttpResponsePtr&)>&& callback) {
        auto json = req->getJsonObject();
        if (!json) {
            auto response = HttpResponse::newHttpJsonResponse(Json::Value("Invalid JSON"));
            callback(response);
            return;
        }

        SubmissionRequest request;
        request.userId = (*json)["userId"].asString();
        request.sourceCode = (*json)["sourceCode"].asString();
        request.language = (*json)["language"].asString();
        request.pasteRatio = (*json)["pasteRatio"].asDouble();

        Json::Value result = service.analyzeSubmission(request);
        auto response = HttpResponse::newHttpJsonResponse(result);
        callback(response);
    }
};