#pragma once

#include <string>

struct SubmissionRequest {
    std::string userId;
    std::string sourceCode;
    std::string language;

    double pasteRatio;
    double typingSpeed;
    int submissionTimeSeconds;
    bool suspiciousPasteBurst;
};