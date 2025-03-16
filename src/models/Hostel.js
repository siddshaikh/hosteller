import mongoose from "mongoose";

const hostelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  locationId: {
    type: String,
    ref: "Location",
    required: true,
  },
  price: { type: String, required: true },
  availability: { type: Number, required: true },
});

export default mongoose.models.Hostel || mongoose.model("Hostel", hostelSchema);
