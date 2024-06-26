const mongoose = require('mongoose');
const { Schema } = mongoose;

const JobSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  requirements: [String],
  location: String,
  salary: Number,
  employer: { type: Schema.Types.ObjectId, ref: 'User' },
  company: { type: Schema.Types.ObjectId, ref: 'Company' },
});

module.exports = mongoose.model('Job', JobSchema);
