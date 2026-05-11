const generateRiskScore = ({
  similarityScore,
  behaviorRisk
}) => {

  let totalRisk = 0;

  const reasons = [];

  // similarity contribution
  if (similarityScore > 0.8) {

    totalRisk += 40;

    reasons.push(
      "High code similarity detected"
    );
  }

  totalRisk += behaviorRisk;

  const flagged = totalRisk >= 60;

  return {
    riskScore: totalRisk,
    flagged,
    reasons
  };
};

module.exports = {
  generateRiskScore
};