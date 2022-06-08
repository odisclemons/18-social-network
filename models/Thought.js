const { Schema, model } = require("mongoose");
const { isEmail } = require("validator");
const moment = require("moment");

const reactionSchema = new Schema({
  reactionId: { type: Schema.Types.ObjectId },
  reactionBody: { type: String, required: true, maxlength: 280 },
  username: { type: String, required: true },
});

const thoughtSchema = new Schema({
  thoughtText: { type: String, required: true, maxlength: 280, minlength: 1 },
  createdAt: {
    type: Date,
    default: Date.now(),
    get: (date) => {
      return moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a");
    },
  },
  username: { type: String, required: true },
  reactions: [reactionSchema],
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
