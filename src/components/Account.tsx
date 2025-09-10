import { div } from "framer-motion/client";
import React, { useState } from "react";
import { Lock, Mail, User, UserRound } from "lucide-react";

const Account = () => {
  const [accountEmail, setAccountEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [newUser, setnewUser] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");
  const [confirmPass, setConfirmPass] = useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!(password.length >= 8 && password == confirmPass))
      if (password.length < 8) {
        setError("Password must be at least 8 characters");
      } else if (password !== confirmPass) {
        setError("Passwords do not match");
      } else {
        setError("");
      }
  };
  return (
    <>
      <div
        className={`w-[400px] ${
          newUser ? "h-[500px]" : "h-[350px]"
        } bg-white shadow-xl rounded-2xl !pt-3 
            grid grid-rows-[auto_1fr_auto]
         `}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          id="intro"
          className="flex items-center h-15 justify-center text-gray-600 !text-xl"
        >
          <p className="font-bold text-gray-700">
            {newUser ? "Create a new account" : "Log In"}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-between gap-2 h-full w-full rounded-t-4xl bg-gray-200  !py-7 !px-3 overflow-auto ">
            <div
              id="part1"
              className="flex flex-col gap-2 text-sm justify-center items-center h-full"
            >
              {newUser && (
                <>
                  <div className=" flex items-center gap-2 !px-3 !py-1 bg-white rounded-2xl ">
                    <User className="w-4 h-4 text-gray-500" />
                    <input
                      className="!outline-none"
                      id="firstName"
                      type="text"
                      value={firstName}
                      placeholder="First Name"
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className=" flex items-center gap-2 !px-3 !py-1 bg-white rounded-2xl">
                    <UserRound className="w-4 h-4 text-gray-500" />

                    <input
                      className="!outline-none"
                      id="lastName"
                      type="text"
                      value={lastName}
                      placeholder="Last Name"
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </>
              )}
              <div className=" flex items-center gap-2 !px-3 !py-1 bg-white rounded-2xl">
                <Mail className="w-4 h-4 text-gray-500" />
                <input
                  className="!outline-none"
                  id="email"
                  type="email"
                  value={accountEmail}
                  placeholder="Email"
                  onChange={(e) => setAccountEmail(e.target.value)}
                  required
                />
              </div>
              <div className=" flex items-center gap-2 !px-3 !py-1 bg-white rounded-2xl">
                <Lock className="w-4 h-4 text-gray-500" />
                <input
                  className="!outline-none"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {newUser && (
                <div className=" flex items-center gap-2 !px-3 !py-1 bg-white rounded-2xl">
                  <Lock className="w-4 h-4 text-gray-500" />
                  <input
                    className="!outline-none"
                    id="password"
                    type="password"
                    placeholder="Confirm Password "
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    required
                  />
                </div>
              )}
              {error && (
                <div className="text-red-700 mt-1 text-sm ">{error}</div>
              )}
            </div>
            <div
              id="part2"
              className="flex items-center justify-center !p-3 !border-b-1 !border-gray-300 "
            >
              <button
                type="submit"
                className="w-full !rounded-md !bg-slate-500 hover:!bg-slate-600 !text-white !py-2"
              >
                {newUser ? "Sign Up" : "Log In"}
              </button>
            </div>
          </div>
        </form>

        <div
          id="end"
          className="flex items-center justify-center text-sm h-5 bg-gray-200 rounded-b-2xl !pb-6 "
          onClick={() => {
            setnewUser(!newUser);
            setError("");
          }}
        >
          <p className=" text-gray-400">
            {newUser ? " Already have an account?" : "Don't have an account?"}
            <span className="text-red-400 hover:text-red-500 cursor-pointer">
              {newUser ? "Sign In" : "Sign Up"}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Account;
