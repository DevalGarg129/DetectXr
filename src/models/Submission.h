#pragma once

#include <string>

struct Submission{
    int id;
    std::string userId;
    std::string sourceCode;
    std::string language;

    double pasteRatio;
    int riskScore;
    bool flagged;
};