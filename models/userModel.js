import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, enum: ["Mr", "Mrs", "Miss"]},
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, },
    password: { type: String, required: true},
    //profileImage: { type: String, required: true },
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      pincode: { type: String, required: true },
    }
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;
