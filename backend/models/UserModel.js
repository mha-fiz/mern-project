import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      uniqe: true,
      required: [true, 'Email is required'],
    },
    password: { type: String, required: [true, 'Password is required'] },
    isAdmin: {
      type: Boolean,
      default: false,
      required: [true, 'Please set access permission'],
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
