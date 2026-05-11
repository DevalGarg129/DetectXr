const {
  processCode,
  calculateJaccardSimilarity
} = require("./similarity.service");

const {
  analyzeBehavior
} = require("./behavior.service");

const {
  generateRiskScore
} = require("./risk.service");

const Submission = require("../models/submission.model");

const analyzeSubmission = async (data) => {

  const {
    code,
    problemId
  } = data;

  // tokenize code
  const tokens = processCode(code);

  // fetch previous submissions
  const previousSubmissions =
    await Submission.find({
      problemId
    });

  let highestSimilarity = 0;

  // compare similarities
  for (let submission of previousSubmissions) {

    const similarity =
      calculateJaccardSimilarity(
        tokens,
        submission.tokens
      );

    if (similarity > highestSimilarity) {
      highestSimilarity = similarity;
    }
  }

  // behavior analysis
  const behaviorResult =
    analyzeBehavior(data);

  // final risk analysis
  const riskResult =
    generateRiskScore({
      similarityScore: highestSimilarity,
      behaviorRisk:
        behaviorResult.behaviorRisk
    });

  return {

    tokens,

    similarityScore:
      highestSimilarity,

    riskScore:
      riskResult.riskScore,

    flagged:
      riskResult.flagged,

    reasons: [
      ...behaviorResult.reasons,
      ...riskResult.reasons
    ]
  };
};

module.exports = {
  analyzeSubmission
};