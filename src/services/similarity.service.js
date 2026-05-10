const normalizeCode = require("../utils/normalize");
const tokenizeCode = require("../utils/tokenize");

const calculateJaccardSimilarity = (tokens1, tokens2) => {
    const set1 = new Set(tokens1);
    const set2 = new Set(tokens2);

    const intersection = new Set([...set1].filter(token => set2.has(token)));
    const union = new Set([...set1, ...set2]);

    return intersection.size / union.size;
};

const processCode = (code) => {
    const normalizedCode = normalizeCode(code);
    const tokens = tokenizeCode(normalizedCode);
    return tokens;
};

module.exports = {
    calculateJaccardSimilarity,
    processCode
};