#pragma once

#include "../models/Submission.h"

class SubmissionRepository {

public:

    void saveSubmission(const Submission& submission) {
        // Database saving is intentionally disabled for this demo
        // In production, this would save to a database
    }
};