const RiskReport = ({
  report
}) => {

  return (

    <div
      className="
      mt-8
      bg-zinc-950
      border
      border-zinc-800
      p-6
      rounded-2xl"
    >

      <h2
        className="
        text-3xl
        font-bold
        mb-6
        text-green-400"
      >
        Analysis Report
      </h2>

      <div
        className="
        grid
        grid-cols-2
        gap-4"
      >

        <div
          className="
          bg-zinc-900
          p-4
          rounded-xl"
        >
          <p className="text-zinc-400">
            Risk Score
          </p>

          <h3
            className="
            text-2xl
            font-bold"
          >
            {report.riskScore}
          </h3>
        </div>

        <div
          className="
          bg-zinc-900
          p-4
          rounded-xl"
        >
          <p className="text-zinc-400">
            Similarity
          </p>

          <h3
            className="
            text-2xl
            font-bold"
          >
            {report.similarityScore}
          </h3>
        </div>

      </div>

      <div
        className="
        mt-6
        bg-zinc-900
        p-4
        rounded-xl"
      >

        <p className="text-zinc-400">
          Submission Status
        </p>

        <h3
          className={`
          text-2xl
          font-bold
          ${
            report.flagged
              ? "text-red-500"
              : "text-green-500"
          }
          `}
        >
          {
            report.flagged
              ? "FLAGGED"
              : "SAFE"
          }
        </h3>

      </div>

      <div
        className="
        mt-6
        bg-zinc-900
        p-4
        rounded-xl"
      >

        <h3
          className="
          text-xl
          font-bold
          mb-3"
        >
          Reasons
        </h3>

        <ul
          className="
          list-disc
          ml-6
          text-zinc-300
          flex
          flex-col
          gap-2"
        >

          {
            report.reasons.map(
              (reason, index) => (

              <li key={index}>
                {reason}
              </li>
            ))
          }

        </ul>

      </div>

    </div>
  );
};

export default RiskReport;