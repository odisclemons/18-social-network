const { Schema, model } = require("mongoose");
const { isEmail } = require("validator");

const reactionSchema = new Schema({
  reactionId: { type: Schema.Types.ObjectId },
  reactionBody: { type: String, required: true, maxlength: 280 },
  username: { type: String, required: true },
});

const thoughtSchema = new Schema({
  thoughtText: { type: String, required: true, maxlength: 280, minlength: 1 },
  createdAt: { type: Date, default: Date.now() },
  username: { type: String, required: true },
  reactions: [reactionSchema],
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
