import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import NavigationBar from "./NavigationBar";
import Welcome from "./WelcomePages/Welcome";
import page from "./WelcomePages/content";
import ToDoPage from "./ToDoPage";
import Account from "./Account";
export const DataContext = React.createContext<{
  showLoginDiv: boolean;
  setLoginDiv: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

const HomePage = () => {
  const [showLoginDiv, setLoginDiv] = useState(false);

  const [pageNum, setPage] = useState(0);
  const [showPage, setShowPage] = useState(false);
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
  const createNav = (parag: string) => {
    return (
      <DataContext.Provider value={{ showLoginDiv, setLoginDiv }}>
        <NavigationBar type={parag} />
      </DataContext.Provider>
    );
  };

  return (
    <>
      <div className="relative w-full h-screen sm:grid sm:!grid-cols-[auto_1fr]  ">
        {pageNum < page.length ? (
          <>
            {createNav("welcome")}
            <Welcome index={pageNum} handleNext={handleNext} />
          </>
        ) : (
          <>
            {createNav("todoPage")}
            {showPage && <ToDoPage />}
          </>
        )}
        {showLoginDiv && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center  bg-black/40 backdrop-blur-sm"
            onClick={() => setLoginDiv(false)}
          >
            
              <Account />
            </div>
     
        )}
        <AnimatePresence>
          {todoShow && (
            <motion.div
              className="fixed top-0 left-0 h-full w-full bg-blue-400 z-50"
              initial={{ x: "-100%", opacity: 0.9 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "100%", opacity: 0.6 }}
              transition={{ duration: 0.5, ease: [0.7, 0.01, 0.05, 0.95] }}
              onAnimationComplete={() => {
                setTodoShow(false);
                setShowPage(true);
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default HomePage;
