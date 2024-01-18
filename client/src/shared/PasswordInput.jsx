import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className="relative mx-auto">
      <input
        type={isPasswordVisible ? "text" : "password"}
        placeholder="Password"
        className="border p-3 rounded-lg"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div
        className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
        onClick={togglePasswordVisibility}
      >
        {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
      </div>
    </div>
  );
};

export default PasswordInput;
