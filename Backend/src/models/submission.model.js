const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true
    },

    problemId: {
      type: String,
      required: true
    },

    code: {
      type: String,
      required: true
    },

    tokens: {
      type: [String],
      required: true
    },

    similarityScore: {
      type: Number,
      default: 0
    },

    riskScore: {
      type: Number,
      default: 0
    },

    flagged: {
      type: Boolean,
      default: false
    },

    reasons: {
      type: [String],
      default: []
    },

    // behavior metrics
    pasteCount: {
      type: Number,
      default: 0
    },

    typedChars: {
      type: Number,
      default: 0
    },

    pastedChars: {
      type: Number,
      default: 0
    },

    submissionTime: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Submission",
  submissionSchema
);