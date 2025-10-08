import * as mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  favouriteBoards: { type: [String], required: false, default: [] },
  password: { type: String, required: true, select: false },
});
