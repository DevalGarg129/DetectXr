import { useState } from "react";

import API from "../services/api";

import RiskReport from "./RishReport";

const SubmissionForm = () => {

  const [formData, setFormData] =
    useState({

      userId: "",

      problemId: "",

      code: "",

      pasteCount: 0,

      typedChars: 0,

      pastedChars: 0,

      submissionTime: 0
    });

  const [report, setReport] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value
    });
  };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        const response =
          await API.post(
            "/submission/submit",
            formData
          );

        setReport(
          response.data
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };

  return (

    <div
      className="
      bg-zinc-900
      p-8
      rounded-2xl
      shadow-xl"
    >

      <form
        onSubmit={handleSubmit}
        className="
        flex
        flex-col
        gap-5"
      >

        <input
          type="text"
          name="userId"
          placeholder="User ID"
          onChange={handleChange}
          className="
          p-3
          rounded-lg
          bg-zinc-800
          border
          border-zinc-700
          outline-none"
        />

        <input
          type="text"
          name="problemId"
          placeholder="Problem ID"
          onChange={handleChange}
          className="
          p-3
          rounded-lg
          bg-zinc-800
          border
          border-zinc-700
          outline-none"
        />

        <textarea
          name="code"
          rows="12"
          placeholder="Paste submission code..."
          onChange={handleChange}
          className="
          p-4
          rounded-lg
          bg-zinc-800
          border
          border-zinc-700
          outline-none"
        />

        <div
          className="
          grid
          grid-cols-2
          gap-4"
        >

          <input
            type="number"
            name="pasteCount"
            placeholder="Paste Count"
            onChange={handleChange}
            className="
            p-3
            rounded-lg
            bg-zinc-800
            border
            border-zinc-700"
          />

          <input
            type="number"
            name="typedChars"
            placeholder="Typed Characters"
            onChange={handleChange}
            className="
            p-3
            rounded-lg
            bg-zinc-800
            border
            border-zinc-700"
          />

          <input
            type="number"
            name="pastedChars"
            placeholder="Pasted Characters"
            onChange={handleChange}
            className="
            p-3
            rounded-lg
            bg-zinc-800
            border
            border-zinc-700"
          />

          <input
            type="number"
            name="submissionTime"
            placeholder="Submission Time (sec)"
            onChange={handleChange}
            className="
            p-3
            rounded-lg
            bg-zinc-800
            border
            border-zinc-700"
          />

        </div>

        <button
          className="
          bg-green-600
          hover:bg-green-700
          transition-all
          p-3
          rounded-lg
          font-semibold"
        >

          {
            loading
            ? "Analyzing..."
            : "Analyze Submission"
          }

        </button>

      </form>

      {
        report && (
          <RiskReport report={report} />
        )
      }

    </div>
  );
};

export default SubmissionForm;