import { useSelector } from "react-redux";
import PlaceholderImg from "../assets/placeholder-img.png";
import { useEffect, useRef, useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

const Profile = () => {
  const [file, setFile] = useState(undefined);
  //console.log(file);
  const fileRef = useRef(null);
  const currentUser = useSelector((state) => state.user);
  const [fileUploadPercentage, setFileUploadPercentage] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});

  //console.log(formData);
  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //console.log("Upload is " + progress + " % done");
        setFileUploadPercentage(Math.round(progress));
      },
      (error) => {
        fileUploadError(true);
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setFormData({ ...formData, avatar: downloadUrl });
        });
      }
    );
  };
  const avatarSrc = currentUser.avatar || PlaceholderImg;
  return (
    <div className="max-w-lg mx-auto shadow-lg bg-slate-50 rounded-lg mt-24 p-8">
      <h1 className="text-3xl font-semibold text-center my-10">Profile</h1>
      <form className="flex flex-col gap-4">
        <input
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
        />
        <img
          onClick={() => {
            fileRef.current.click();
          }}
          src={formData.avatar || avatarSrc}
          alt="profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
        />
        <p>
          {fileUploadError ? (
            <span className="text-red-700">Error in image uploading</span>
          ) : fileUploadPercentage > 0 && fileUploadPercentage < 100 ? (
            <span className="text-slate-700">{`Uploading ${fileUploadPercentage}%`}</span>
          ) : (
            fileUploadPercentage === 100 && (
              <span className="text-green-700">
                Image Uploaded Successfully
              </span>
            )
          )}
        </p>
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
