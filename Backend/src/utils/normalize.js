const normalizeCode = (code) => {

    //remove single line comments
    code = code.replace(/\/\/.*$/gm, "");

    //remove multi line comments
    code = code.replace(/\/\*[\s\S]*?\*\//g, "");

    //remove extra whitespace
    code = code.replace(/\s+/g, " ").trim();

    code = code.trim();

    return code.toUpperCase();
};

module.exports = normalizeCode;