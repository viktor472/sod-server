/// Re-declaring mongoose npm package to initialze the Schema
const mongoose = require("mongoose");
///The DB save content according to this Schema below:
const ambSchema = mongoose.Schema({
/*     ambnumber: {
    type: Number,
    required: true,
  }, */
  regnumber: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("amb", ambSchema);
