import { useState } from "react";
import Image from "next/image";

export default function PasswordInput() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="my-3 text-sm relative">
      <input
        type={isPasswordVisible ? "text" : "password"}
        id="password"
        className="rounded-md px-4 py-3 mt-1 focus:outline-none bg-black text-gray-50 w-full pr-10"
        placeholder="Password"
      />
      <button
        type="button"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:bg-gray-700 rounded-full"
        onClick={togglePasswordVisibility}
      >
        <Image src={require(".../../public/eye.svg")} alt="Show/Hide Password" width="20" height="20" />
      </button>
    </div>
  );
}
