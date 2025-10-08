import * as mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  boards: { type: [String], required: false, default: [] },
  favouriteBoards: { type: [String], required: false, default: [] },
});
