import React from 'react';

const ResultBox = ({ result }) => {
    if (!result) {
        return (
            <div className="result-box empty">
                <p>No analysis results yet. Submit code to get started.</p>
            </div>
        );
    }

    const { similarity, behavior, metrics, timestamp } = result;

    return (
        <div className="result-box">
            <div className="result-header">
                <h2>Analysis Results</h2>
                <span className="timestamp">{new Date(timestamp).toLocaleString()}</span>
            </div>

            {/* Similarity Section */}
            <div className="result-section">
                <h3>Code Similarity</h3>
                <div className="metric-display">
                    <div className="metric">
                        <span className="metric-label">Overall Similarity:</span>
                        <span className="metric-value">
                            {(similarity?.score * 100).toFixed(2)}%
                        </span>
                    </div>
                    <div className="metric">
                        <span className="metric-label">Matched Tokens:</span>
                        <span className="metric-value">
                            {similarity?.matchedTokens || 0}
                        </span>
                    </div>
                </div>
            </div>

            {/* Behavior Analysis Section */}
            <div className="result-section">
                <h3>Behavior Analysis</h3>
                <div className="behavior-list">
                    {behavior?.obfuscation?.detected && (
                        <div className="behavior-item warning">
                            <span className="icon">⚠️</span>
                            <span>Obfuscation detected - {behavior.obfuscation.count} patterns</span>
                        </div>
                    )}
                    {behavior?.suspiciousImports?.length > 0 && (
                        <div className="behavior-item warning">
                            <span className="icon">⚠️</span>
                            <span>Suspicious imports: {behavior.suspiciousImports.join(', ')}</span>
                        </div>
                    )}
                    {!behavior?.obfuscation?.detected && behavior?.suspiciousImports?.length === 0 && (
                        <div className="behavior-item safe">
                            <span className="icon">✓</span>
                            <span>No suspicious behavior detected</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Code Metrics Section */}
            <div className="result-section">
                <h3>Code Metrics</h3>
                <div className="metrics-grid">
                    <div className="metric-card">
                        <span className="metric-label">Total Lines</span>
                        <span className="metric-value">{metrics?.totalLines || 0}</span>
                    </div>
                    <div className="metric-card">
                        <span className="metric-label">Complexity</span>
                        <span className="metric-value">{metrics?.complexity || 0}</span>
                    </div>
                    <div className="metric-card">
                        <span className="metric-label">Comment Ratio</span>
                        <span className="metric-value">{((metrics?.commentRatio || 0) * 100).toFixed(1)}%</span>
                    </div>
                    <div className="metric-card">
                        <span className="metric-label">Duplicate Lines</span>
                        <span className="metric-value">{metrics?.duplicateLines || 0}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultBox;
