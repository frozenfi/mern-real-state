import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Ffull%2F73-730477_first-name-profile-image-placeholder-png.png&f=1&nofb=1&ipt=eb1c0fd53a5ba2a357f7f75b005bf69743a6a8e72500e42db27e5481faa10f6b&ipo=images",
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
