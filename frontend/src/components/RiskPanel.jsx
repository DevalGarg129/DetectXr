import React from 'react';

const RiskPanel = ({ riskAssessment }) => {
    if (!riskAssessment) {
        return (
            <div className="risk-panel empty">
                <p>Risk assessment will appear here after analysis.</p>
            </div>
        );
    }

    const { riskScore, severity, riskFactors, recommendation } = riskAssessment;

    const getSeverityClass = (severity) => {
        switch (severity) {
            case 'Low':
                return 'severity-low';
            case 'Medium':
                return 'severity-medium';
            case 'High':
                return 'severity-high';
            case 'Critical':
                return 'severity-critical';
            default:
                return '';
        }
    };

    const getSeverityIcon = (severity) => {
        switch (severity) {
            case 'Low':
                return '✓';
            case 'Medium':
                return '⚠️';
            case 'High':
                return '🚨';
            case 'Critical':
                return '🛑';
            default:
                return '?';
        }
    };

    return (
        <div className="risk-panel">
            {/* Risk Score Display */}
            <div className={`risk-score-display ${getSeverityClass(severity)}`}>
                <div className="risk-score-icon">
                    {getSeverityIcon(severity)}
                </div>
                <div className="risk-score-content">
                    <h3>Risk Assessment</h3>
                    <div className="risk-score-value">
                        <span className="score">{Math.round(riskScore)}</span>
                        <span className="percent">%</span>
                    </div>
                    <span className={`severity-badge ${getSeverityClass(severity)}`}>
                        {severity}
                    </span>
                </div>
            </div>

            {/* Risk Progress Bar */}
            <div className="risk-progress">
                <div className="progress-bar-container">
                    <div
                        className={`progress-bar ${getSeverityClass(severity)}`}
                        style={{ width: `${riskScore}%` }}
                    />
                </div>
                <div className="progress-labels">
                    <span>Low</span>
                    <span>Medium</span>
                    <span>High</span>
                    <span>Critical</span>
                </div>
            </div>

            {/* Risk Factors */}
            <div className="risk-factors">
                <h4>Risk Factors</h4>
                <div className="factors-list">
                    {Object.entries(riskFactors).map(([key, factor]) => (
                        <div key={key} className={`risk-factor ${getSeverityClass(factor.severity)}`}>
                            <div className="factor-header">
                                <span className="factor-name">
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                </span>
                                <span className="factor-value">{Math.round(factor.value)} pts</span>
                            </div>
                            <p className="factor-description">{factor.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recommendation */}
            <div className={`recommendation ${getSeverityClass(severity)}`}>
                <h4>Recommendation</h4>
                <p>{recommendation}</p>
            </div>
        </div>
    );
};

export default RiskPanel;
