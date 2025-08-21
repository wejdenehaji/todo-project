import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import NavigationBar from "./NavigationBar";
import Welcome from "./WelcomePages/Welcome";
import page from "./WelcomePages/content";
import ToDoPage from "./ToDoPage";

const paragraphs = [];
const HomePage = () => {
  const [pageNum, setPage] = useState(0);
  const [todoShow, setTodoShow] = useState(false);
  const timerRef = useRef<number | null>(null);
  useEffect(() => {
    if (pageNum >= page.length - 1) return;

    timerRef.current = setTimeout(() => {
      setPage((prev) => prev + 1);
    }, 2500);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [pageNum]);

  const handleNext = (index: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (index < page.length - 1) setPage(index + 1);
    else {
      setPage(page.length);
      setTodoShow(true);
    }
  };

  return (
    <>
      <div className="relative w-full h-screen ">
        <NavigationBar />
        
            {pageNum < page.length ? (
              <Welcome index={pageNum} handleNext={handleNext} />
            ) : (
              <ToDoPage />
            )}
            <AnimatePresence>
        {todoShow && (
          <motion.div
            className="fixed top-[75px] left-0 w-full h-[calc(100%-75px)] bg-blue-400 z-50"
            initial={{ x: "-100%", opacity: 0.9 }}
            animate={{ x: "0%" , opacity: 1}}
            exit={{ x: "100%" , opacity: 0.6 }}
            transition={{ duration: 0.5, ease:  [0.7, 0.01, 0.05, 0.95]}}
            onAnimationComplete={() => setTodoShow(false)} 
          />
        )}
      </AnimatePresence>
      </div>
    </>
  );
};

export default HomePage;
