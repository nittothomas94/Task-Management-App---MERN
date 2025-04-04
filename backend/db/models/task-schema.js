const { Schema, model, Types } = require('mongoose');

const TaskSchema = Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ['Pending', 'Completed'],
      default: 'Pending',
    },
  },
  {
    timestamps: true,
  }
);

const Task = model('tasks-collection', TaskSchema);

module.exports = Task;
