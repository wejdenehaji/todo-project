import React from "react";
import page from "./content";
import { motion, AnimatePresence } from "framer-motion";

interface props {
  index: number;
  handleNext: (arg: number) => void;
}

const Welcome = ({ index, handleNext }: props) => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <div className=" min-h-screen grid grid-rows-[80%_20%] !py-3  !px-5 sm:grid-rows-[75%_25%] items-center justify-center sm:!py-5  sm:!px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              <div
                className={`flex items-center  
                    ${
                      index < 1
                        ? "flex-col-reverse text-center"
                        : "flex-col-reverse text-center sm:flex-row sm:justify-evenly sm:text-left sm:gap-6"
                    }`}
              >
                <img
                  className={` object-contain  h-auto  ${
                    index < 1 ? "sm:w-80 w-64" : "sm:!mb-10 sm:w-96 w-64 "
                  } `}
                  src={page[index].urlImg}
                  alt=""
                />
                <div
                  className={` flex flex-col justify-center   ${
                    index < 1 ? "sm:w-[36rem] w-72" : "sm:w-80 w-72"
                  } `}
                >
                  <h1
                    className={`!text-xl !font-bold !text-gray-700  leading-tight ${
                      index < 1 ? "text-center !mb-3" : " !mb-4"
                    }`}
                  >
                    {page[index].title}
                  </h1>
                  <p
                    className={`sm:text-[16px] text-[14px] !text-gray-500 !mb-6 leading-relaxed  ${
                      index < 1 ? "text-center" : ""
                    }`}
                  >
                    {page[index].intro}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className=" h-full flex items-start justify-center">
            <button
              className="!text-base w-30 h-12 !bg-blue-400 !text-white !rounded-xl !font-medium hover:!bg-blue-600 !transition"
              onClick={() => handleNext(index)}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={page[index].btnText}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="inline-block w-full text-center"
                >
                  {page[index].btnText}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
