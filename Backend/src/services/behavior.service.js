const analyzeBehavior = ({
  pasteCount,
  typedChars,
  pastedChars,
  submissionTime
}) => {

  let risk = 0;

  const reasons = [];

  // excessive paste activity
  if (pasteCount > 2) {
    risk += 20;

    reasons.push(
      "High paste activity detected"
    );
  }

  // more pasted than typed
  if (pastedChars > typedChars * 2) {
    risk += 25;

    reasons.push(
      "Low typing activity"
    );
  }

  // suspiciously fast submission
  if (submissionTime < 60) {
    risk += 20;

    reasons.push(
      "Unusually fast submission"
    );
  }

  return {
    behaviorRisk: risk,
    reasons
  };
};

module.exports = {
  analyzeBehavior
};