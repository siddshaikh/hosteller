import mongoose, { Schema } from "mongoose";

const locationSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

export const Location =
  mongoose.models.Location || mongoose.model("Location", locationSchema);
