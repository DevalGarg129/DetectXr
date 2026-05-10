const Submission = require("../models/submission.model");

const {
  processCode,
  calculateJaccardSimilarity
} = require("../services/similarity.service");

const submitCode = async (req, res) => {

  try {

    console.log(req.body);

    const { userId, problemId, code } = req.body;

    if (!userId || !problemId || !code) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // process code
    const tokens = processCode(code);

    console.log(tokens);

    // fetch previous submissions
    const previousSubmissions = await Submission.find({
      problemId
    });

    console.log(previousSubmissions);

    // similarity check
    for (let submission of previousSubmissions) {

      const similarity =
        calculateJaccardSimilarity(
          tokens,
          submission.tokens
        );

      if (similarity > 0.8) {

        return res.status(200).json({
          flagged: true,
          similarity: similarity.toFixed(2),
          matchedWith: submission.userId,
          message: "⚠️ Similar code detected"
        });
      }
    }

    // save submission
    const newSubmission = new Submission({
      userId,
      problemId,
      code,
      tokens
    });

    await newSubmission.save();

    return res.status(201).json({
      flagged: false,
      message: "✅ Submission accepted"
    });

  } catch (error) {

    console.log("ERROR:");
    console.log(error);

    return res.status(500).json({
      message: "Internal Server Error"
    });
  }
};

module.exports = {
  submitCode
};