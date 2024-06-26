const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is mandatory"] },
  email: {
    type: String,
    required: [true, "Please provide the email"],
    unique: true,
  },
  phoneNumber: {
    type: Number,
    required: [true, "Please provide contact details"],
  },
  password: {
    type: String,
    required: [true, "Password is mandatory"],
    select: false,
  },
  roles: { type: [String], enum: ["user", "admin"], default: "user" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  gender: { type: String, required: [true, "gender us mandatory"] },
});

const userModel = new mongoose.model("Users", userSchema);

module.exports = userModel;
