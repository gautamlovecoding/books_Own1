import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, enum: ["Mr", "Mrs", "Miss"] },
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, minlength: 8, maxlength: 15 },
    address: {
      street: { type: String },
      city: { type: String },
      pincode: { type: String },
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;
