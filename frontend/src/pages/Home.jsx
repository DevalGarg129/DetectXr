import React from 'react';
import CodeInput from '../components/CodeInput';
import ResultBox from '../components/ResultBox';
import RiskPanel from '../components/RiskPanel';
import '../styles/Home.css';

const Home = () => {
    const [analysisResult, setAnalysisResult] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const handleAnalyze = async (data) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:3000/api/submissions/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    submissionCode: data.code,
                    referenceCode: data.referenceCode,
                }),
            });

            if (!response.ok) {
                throw new Error(`Analysis failed with status ${response.status}`);
            }

            const result = await response.json();
            setAnalysisResult(result);
        } catch (err) {
            setError(err.message || 'An error occurred during analysis');
            console.error('Analysis error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="home-container">
            <header className="app-header">
                <h1>DetectXr</h1>
                <p>Code Similarity and Risk Detection</p>
            </header>

            <main className="main-content">
                <div className="content-grid">
                    <section className="input-section">
                        <CodeInput
                            onAnalyze={handleAnalyze}
                            isLoading={isLoading}
                        />
                    </section>

                    <section className="results-section">
                        {error && (
                            <div className="error-message">
                                <span>Error: {error}</span>
                            </div>
                        )}
                        <ResultBox result={analysisResult} />
                    </section>
                </div>

                <aside className="risk-section">
                    <RiskPanel riskAssessment={analysisResult?.risk} />
                </aside>
            </main>
        </div>
    );
};

export default Home;
