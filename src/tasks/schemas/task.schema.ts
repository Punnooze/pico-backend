import * as mongoose from 'mongoose';

export const TaskRelationSchema = new mongoose.Schema({
  relation: { type: String, required: true },
  relationId: { type: String, required: true },
});

export const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  status: { type: String, required: true },
  boardId: { type: String, required: true },
  dueDate: { type: Date, required: true },
  createdAt: { type: Date, required: true },
  priority: { type: String, required: true },
  assignedTo: { type: String, required: false },
  relation: { type: TaskRelationSchema, required: false },
  type: { type: String, required: true },
});
