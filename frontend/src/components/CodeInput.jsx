import React, { useState } from 'react';

const CodeInput = ({ onAnalyze, isLoading }) => {
    const [code, setCode] = useState('');
    const [referenceCode, setReferenceCode] = useState('');

    const handleAnalyze = () => {
        if (code.trim() && referenceCode.trim()) {
            onAnalyze({ code, referenceCode });
        }
    };

    const handleClear = () => {
        setCode('');
        setReferenceCode('');
    };

    return (
        <div className="code-input-container">
            <div className="input-section">
                <div className="code-editor">
                    <label htmlFor="submission-code">Submission Code</label>
                    <textarea
                        id="submission-code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Paste the code to be analyzed here..."
                        rows={12}
                        disabled={isLoading}
                    />
                </div>

                <div className="code-editor">
                    <label htmlFor="reference-code">Reference Code</label>
                    <textarea
                        id="reference-code"
                        value={referenceCode}
                        onChange={(e) => setReferenceCode(e.target.value)}
                        placeholder="Paste the reference code here..."
                        rows={12}
                        disabled={isLoading}
                    />
                </div>
            </div>

            <div className="button-group">
                <button
                    onClick={handleAnalyze}
                    disabled={isLoading || !code.trim() || !referenceCode.trim()}
                    className="btn btn-primary"
                >
                    {isLoading ? 'Analyzing...' : 'Analyze'}
                </button>
                <button
                    onClick={handleClear}
                    disabled={isLoading}
                    className="btn btn-secondary"
                >
                    Clear
                </button>
            </div>
        </div>
    );
};

export default CodeInput;
