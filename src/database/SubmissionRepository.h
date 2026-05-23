#pragma once

#include "../models/Submission.h"

#include <drogon/drogon.h>

class SubmissionRepository {

public:

    void saveSubmission(const submission& submission) {

        auto dbClient =
            drogon::app().getDbClient();

        dbClient->execSqlSync(

            "INSERT INTO submissions "
            "(user_id, source_code, language, "
            "paste_ratio, risk_score, flagged) "

            "VALUES ($1, $2, $3, $4, $5, $6)",

            submission.userId,
            submission.sourceCode,
            submission.language,
            submission.pasteRatio,
            submission.riskScore,
            submission.flagged
        );
    }
};