import React, { useState } from "react";
import { LayoutDashboard, Mail, User } from "lucide-react";

import Profile from "./Profile";
import task from "../assets/task.png";
interface props {
  type: string;
}

const NavigationBar = ({ type }: props) => {
  const [active, setActive] = useState("Dashboard");
  const [responsive, setResponsive] = useState(false);
  const links = [
    {
      label: "Dashboard",
      path: "/",
      icon: <LayoutDashboard className="w-4.5 h-4.5" />,
    },
    { label: "Contact", path: "/contact", icon: <Mail className="w-4 h-4" /> },
    { label: "About Us", path: "/about", icon: <User className="w-4 h-4" /> },
  ];

  return (
    <>
      <nav
        className={`flex  z-60 sm:flex-col justify-between items-center !px-1 !border-b-2 !border-gray-400 w-full h-[75px] !font-open font-medium !text-xs  text-gray-500 sm:!border-0 sm:h-full sm:!py-6 ${
          type === "welcome"
            ? " bg-gradient-to-br from-gray-200 via-gray-100 to-gray-50 "
            : "bg-white"
        } `}
      >
        <button
          className=" relative sm:hidden"
          onClick={() => setResponsive(!responsive)}
        >
          ☰
        </button>
        {responsive == true && (
          <div className="absolute top-[80px] left-0  z-50 w-full bg-white shadow-md md:hidden ">
            {" "}
            <ul className="  flex flex-col sm:hidden ">
              {links.map((link) => (
                <li
                  key={link.label}
                  className="relative !py-5 !px-1 transition-colors duration-300 hover:text-gray-700"
                >
                  <a
                    onClick={() => setActive(link.label)}
                    className={` ${
                      active == link.label
                        ? "font-semibold !text-blue-400"
                        : "text-gray-700"
                    }`}
                    href={link.path}
                  >
                    {link.label}
                  </a>
                  {active === link.label && (
                    <span className="absolute left-[-9px] bottom-0 w-full h-1 py-5 bg-blue-400 rounded-full transition-all duration-300" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
        <img
          src={task}
          className=" fixed left-12  size-9 sm:static"
          alt="Logo"
        />
        <ul className="hidden sm:flex w-full sm:flex-col ">
          {links.map((link) => (
            <li
              key={link.label}
              className="relative  transition-colors duration-300 "
            >
              <div
                className={`!my-3 !ml-2  ${
                  active === link.label
                    ? "!px-2 !py-3  font-semibold !text-blue-400"
                    : "!px-2.5 hover:text-gray-700"
                }`}
              >
                <a onClick={() => setActive(link.label)} href={link.path}>
                  {link.icon}
                </a>
              </div>
            </li>
          ))}
        </ul>

        <Profile />
      </nav>
    </>
  );
};

export default NavigationBar;
