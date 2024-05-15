// quizModel.js
const { Schema, model } = require("mongoose");

const optionSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  isCorrect: {
    type: Boolean,
    default: false
  }
});

const questionSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  options: [optionSchema]
});

const quizSchema = new Schema({
  status: {
    type: String,
    default: "inactive",
    enum: ["active", "inactive"]
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true
  },
  questions: [questionSchema],
  maximumMarks: {
    type: Number,
    required: true
  }
}, { timestamps: true });

const Quiz = model('Quiz', quizSchema);

module.exports = Quiz;
