import React ,{useState,useContext}from "react";
import myImage from "../assets/image.png";
import { DataContext } from "./HomePage";


const Profile = () => {
const content = React.useContext(DataContext)
if (!content) return null;

  const { showLoginDiv, setLoginDiv } = content;
  return (
    <div className="flex sm:flex-col justify-center items-center gap-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5.75 text-gray-200 hover:text-gray-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.019 4.09a.563.563 0 00.424.308l4.517.656a.562.562 0 01.312.958l-3.27 3.19a.563.563 0 00-.162.498l.771 4.49a.562.562 0 01-.815.593l-4.04-2.126a.562.562 0 00-.524 0l-4.04 2.126a.562.562 0 01-.815-.593l.77-4.49a.563.563 0 00-.162-.498l-3.27-3.19a.562.562 0 01.312-.958l4.518-.656a.563.563 0 00.424-.308l2.019-4.09z"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-5.5  text-gray-200  hover:text-gray-400"
      >
        <path
          fillRule="evenodd"
          d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
          clipRule="evenodd"
        />
      </svg>
      <div className="flex sm:flex-col justify-center items-center gap-1.5">
        <img src={myImage} className="size-7" alt="image" onClick={()=>setLoginDiv(!showLoginDiv)} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.7}
          stroke="currentColor"
          className="size-4 text-gray-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Profile;
