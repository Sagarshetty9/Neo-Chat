import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: [true, "Username must be unique"],
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    unique: [true, "Email must be unique"],
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters"],
  },
  contacts: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Users',
    default: []
    
  }
});

const UserModel = mongoose.model('Users', userSchema);

export default UserModel;




