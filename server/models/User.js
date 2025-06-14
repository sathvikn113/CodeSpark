import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: { type: String, required: true }, // This can be a Firebase UID or custom ID
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  imageUrl: { type: String },
  enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }] // Assuming you have a Course model
}
,{
  timestamps:true
});

const User = mongoose.model("User", userSchema);

export default User;
