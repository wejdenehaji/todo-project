import React, { useState } from "react";
import Profile from "./Profile";
import task from "../assets/task.png";
const NavigationBar = () => {
  const [active, setActive] = useState("Dashboard");
  const [responsive, setResponsive] = useState(false);
  const links = [
    { label: "Dashboard", path: "/" },
    { label: "About us", path: "/still" },
    { label: "Contact", path: "/develop" },
  ];
  return (
    <>
      <nav className=" flex justify-between items-center !border-b-2 !border-gray-200 !px-5 !py-2 w-full h-[75px] !font-open font-medium text-sm leading-7 text-gray-500 ">
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
          className=" fixed left-12  size-7.5 sm:static"
          alt="Logo"
        />
        <ul className=" hidden sm:flex gap-12 ">
          {links.map((link) => (
            <li
              key={link.label}
              className="relative !py-5.5 !px-1 transition-colors duration-300 hover:text-gray-700"
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
                <span className="absolute left-[-9px] bottom-0 w-[120%] h-1 py-5 bg-blue-400 rounded-full transition-all duration-300" />
              )}
            </li>
          ))}
        </ul>

        <Profile />
      </nav>
    </>
  );
};

export default NavigationBar;
