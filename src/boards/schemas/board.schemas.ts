import * as mongoose from 'mongoose';

export const BoardSchema = new mongoose.Schema({
    name: {type: String, required: true},
    owner: {type: String, required: true},
    members: {type: [String], required: true}
});