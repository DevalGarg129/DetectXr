const Submission = require(
  "../models/submission.model"
);

const {
  analyzeSubmission
} = require(
  "../services/analysis.service"
);

const submitCode = async (
  req,
  res
) => {

  try {

    const submissionData = req.body;

    const analysis =
      await analyzeSubmission(
        submissionData
      );

    // store submission
    const newSubmission =
      new Submission({

        ...submissionData,

        tokens:
          analysis.tokens,

        similarityScore:
          analysis.similarityScore,

        riskScore:
          analysis.riskScore,

        flagged:
          analysis.flagged,

        reasons:
          analysis.reasons
      });

    await newSubmission.save();

    return res.status(201).json({

      flagged:
        analysis.flagged,

      riskScore:
        analysis.riskScore,

      similarityScore:
        analysis.similarityScore,

      reasons:
        analysis.reasons
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      message:
        "Internal Server Error"
    });
  }
};

module.exports = {
  submitCode
};