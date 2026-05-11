const Submission = require(
  "../models/submission.model"
);

const getAnalytics = async () => {

  // total submissions
  const totalSubmissions =
    await Submission.countDocuments();

  // flagged submissions
  const flaggedSubmissions =
    await Submission.countDocuments({
      flagged: true
    });

  // high-risk submissions
  const highRiskSubmissions =
    await Submission.countDocuments({
      riskScore: { $gte: 70 }
    });

  // paste-heavy submissions
  const pasteDominantSubmissions =
    await Submission.countDocuments({
      pastedChars: { $gt: 300 }
    });

  // fetch all submissions
  const submissions =
    await Submission.find();

  let totalRisk = 0;

  let totalSimilarity = 0;

  submissions.forEach((submission) => {

    totalRisk +=
      submission.riskScore;

    totalSimilarity +=
      submission.similarityScore;
  });

  // averages
  const averageRiskScore =
    submissions.length > 0
      ? totalRisk / submissions.length
      : 0;

  const averageSimilarity =
    submissions.length > 0
      ? totalSimilarity / submissions.length
      : 0;

  return {

    totalSubmissions,

    flaggedSubmissions,

    highRiskSubmissions,

    pasteDominantSubmissions,

    averageRiskScore:
      averageRiskScore.toFixed(2),

    averageSimilarity:
      averageSimilarity.toFixed(2)
  };
};

module.exports = {
  getAnalytics
};