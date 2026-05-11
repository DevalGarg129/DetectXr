import { useEffect, useState }
from "react";

import Navbar from
  "../components/NavBar";

import SubmissionForm from
  "../components/SubmissionForm";

import AnalyticsCard from
  "../components/AnalyticsCard";

import API from
  "../services/api";

const Dashboard = () => {

  const [analytics, setAnalytics] =
    useState(null);

  const fetchAnalytics =
    async () => {

      try {

        const response =
          await API.get(
            "/analytics"
          );

        setAnalytics(
          response.data
        );

      } catch (error) {

        console.log(error);
      }
    };

  useEffect(() => {

    fetchAnalytics();

  }, []);

  return (

    <div
      className="
      min-h-screen
      bg-black
      text-white"
    >

      <Navbar />

      <div
        className="
        p-10"
      >

        <div
          className="
          grid
          grid-cols-3
          gap-6
          mb-10"
        >

          {
            analytics && (
              <>

                <AnalyticsCard
                  title="
                  Total Submissions"
                  value={
                    analytics.totalSubmissions
                  }
                />

                <AnalyticsCard
                  title="
                  Flagged Submissions"
                  value={
                    analytics.flaggedSubmissions
                  }
                />

                <AnalyticsCard
                  title="
                  Average Risk Score"
                  value={
                    analytics.averageRiskScore
                  }
                />

                <AnalyticsCard
                  title="
                  Average Similarity"
                  value={
                    analytics.averageSimilarity
                  }
                />

                <AnalyticsCard
                  title="
                  High Risk Submissions"
                  value={
                    analytics.highRiskSubmissions
                  }
                />

                <AnalyticsCard
                  title="
                  Paste Dominant"
                  value={
                    analytics.pasteDominantSubmissions
                  }
                />

              </>
            )
          }

        </div>

        <SubmissionForm />

      </div>

    </div>
  );
};

export default Dashboard;