import { Schema, model, models, Model, Document } from "mongoose";

interface IUser extends Document {
  email: string;
  username: string;
  image?: string; 
}

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
    trim: true, 
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    trim: true,
    // match: [
    //   /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
    //   "Username invalid: it should contain 8-20 alphanumeric letters and no consecutive dots/underscores!",
    // ],
  },
  image: {
    type: String,
    default: "", 
  },
});

const User: Model<IUser> = models.User || model<IUser>("User", userSchema);

export default User;
