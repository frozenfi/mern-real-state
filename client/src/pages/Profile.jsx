import { useSelector } from "react-redux";
import PlaceholderImg from "../assets/placeholder-img.png";

const Profile = () => {
  const currentUser = useSelector((state) => state.user);
  console.log(currentUser);
  const avatarSrc = currentUser.avatar || PlaceholderImg;
  return (
    <div className="max-w-lg mx-auto shadow-lg bg-slate-50 rounded-lg mt-24 p-8">
      <h1 className="text-3xl font-semibold text-center my-10">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={avatarSrc}
          alt="profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
        />
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-lg"
          id="username"
        />
        <input
          type="Email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          type="text"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:bg-slate-500 hover:text-white">
          Update
        </button>
      </form>
      <div className="flex justify-between my-8 mx-1">
        <span className="text-red-700 cursor-pointer hover:text-red-400 text-xl">
          Delete Account
        </span>
        <span className="text-red-700 hover:text-red-400 cursor-pointer text-xl">
          Sign Out{" "}
        </span>
      </div>
    </div>
  );
};

export default Profile;
