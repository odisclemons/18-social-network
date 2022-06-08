const { Schema, model } = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new Schema({
  username: { type: String, unique: true, trim: true, required: true },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: [isEmail, "invalid email"],
  },
  friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
  thoughts: [{ type: Schema.Types.ObjectId, ref: "Thought" }],
  friendCount: Number,
});

const User = model("User", userSchema);

module.exports = User;
