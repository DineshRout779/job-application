const mongoose = require('mongoose');
const { Schema } = mongoose;

const profileSchema = new Schema({
  skills: [String],
  experience: [
    {
      company: {
        type: String,
        required: true,
      },
      from: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
    },
  ],
  education: [
    {
      degree: {
        type: String,
        required: true,
      },
      institute: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
      from: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
        required: true,
      },
    },
  ],
  resume: {
    type: String,
  },
});

const UserSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ['user', 'employer', 'admin'],
      default: 'user',
      required: true,
    },
    profile: profileSchema,
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

UserSchema.virtual('fullName').get(function () {
  return `${this.firstName} ${this.lastName}`;
});

module.exports = mongoose.model('User', UserSchema);
