const tokenizeCode = (code) => {
    const tokens = code
        .split(/[^A-Z0-9_]+/)
        .filter(token => token.length > 0);

    return tokens;
};
module.exports = tokenizeCode;