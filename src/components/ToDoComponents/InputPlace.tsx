import React, { useEffect, useRef,useState } from "react";
import { item as task } from "../ToDoPage";
interface props {
  addTask: (task: task) => void;
}

const InputPlace = ({ addTask }: props) => {
  //states of the form
  const [openTask, setOpenTask] = useState(false);
  const [task, setTask] = useState("");

  const [deadline, setDeadline] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });
    const dateRef = useRef<HTMLInputElement>(null);

  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<string[]>([
    "General",
    "Work",
    "Shopping",
  ]);

  const [error, setError] = useState<string>("");
  useEffect(
    () => localStorage.setItem("categories", JSON.stringify(categories)),
    [categories]
  );

  //submit function
  const handleSublmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!task.length) {
      setError("Task cannot be empty!");
      return;
    }
    if (category && !categories.includes(category)) {
      setCategories([...categories, category]);
    }
    console.log("Task submitted.");

    let storedTasks = localStorage.getItem("todoList");
    let todoList = storedTasks ? JSON.parse(storedTasks) : [];
    const item = { task, category, deadline, status: "Not started" };

    const exists = todoList.some(
      (t: task) => t.task === item.task && t.category === item.category
    );
    if (!exists) {
      todoList.push(item);
      localStorage.setItem("todoList", JSON.stringify(todoList));
      addTask(item);
    }
    setTask("");
    setCategory("");
    setError("");
  };

  return (
    <>
      <div
        id="card"
        className={` bg-white grid w-80
        sm:w-70
        md:w-60 ${
          openTask ? "grid-rows-[1fr_3fr] h-70 row-span-12" : "grid-rows-1 h-20 row-span-4"
        } !px-2 !py-3 !bg-white! rounded-lg !shadow-sm !border-l-5 !border-gray-300 `}
      >
        <div id="intro" className="flex items-start justify-between !pr-1.5">
          <p className="text-gray-700 !font-medium">Create New Card</p>
          <button onClick={() => setOpenTask(!openTask)}>
            {openTask ? (
              <span className="text-gray-500 text-sm">▼</span>
            ) : (
              <span className="text-gray-500 text-sm">▲</span>
            )}
          </button>
        </div>
        {openTask && (
          <form onSubmit={handleSublmit}>
            <div
              id="formDiv"
              className="!mt-1 w-full h-full grid grid-rows-[3fr_1fr_2fr]"
            >
              <div
                id="inputDiv"
                className="!border-1 !border-gray-300 rounded-xl !p-2 !mb-1"
              >
                <input
                
                  className="flex-1 !text-sm leading-tight outline-none text-gray-700 placeholder-gray-400 "
                  type="text"
                  placeholder="What is the task?"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                />
                {error && <div>{error}</div>}
              </div>
              <div
                id="deadline&category"
                className="grid grid-cols-[2fr_3fr] gap-2"
              >
                <div id="deadline" className="relative">
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="size-7 cursor-pointer"
        onClick={() => dateRef.current?.showPicker()}
      >
        <rect x="3" y="4" width="18" height="17" rx="2" ry="2" fill="white" stroke="#3b82f6" strokeWidth="1.7"/>
        <rect x="3" y="4" width="18" height="4" fill="#3b82f6"/>
        <line x1="6" y1="10" x2="18" y2="10" stroke="#93c5fd" strokeWidth="0.8"/>
        <line x1="6" y1="13" x2="18" y2="13" stroke="#93c5fd" strokeWidth="0.8"/>
        <line x1="6" y1="16" x2="18" y2="16" stroke="#93c5fd" strokeWidth="0.8"/>
        <line x1="6" y1="19" x2="18" y2="19" stroke="#93c5fd" strokeWidth="0.8"/>
        <line x1="8" y1="2.5" x2="8" y2="5.5" stroke="#1e3a8a" strokeWidth="1.7" strokeLinecap="round"/>
        <line x1="16" y1="2.5" x2="16" y2="5.5" stroke="#1e3a8a" strokeWidth="1.7" strokeLinecap="round"/>
        <line x1="10" y1="10" x2="10" y2="19" stroke="#93c5fd" strokeWidth="0.8"/>
        <line x1="14" y1="10" x2="14" y2="19" stroke="#93c5fd" strokeWidth="0.8"/>
      </svg>

      
      <input
        type="date"
        ref={dateRef}
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        className="hidden"
      />
    </div>

                <input
                  list="categories"
                  placeholder="Category"
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                />
                <datalist id="categories">
                  {categories.map((cat, i) => (
                    <option key={i} value={cat} />
                  ))}
                </datalist>
              </div>
              <div
                id="buttonDone"
                className="flex items-center justify-center !p-2 !border-t-1 !border-gray-300"
              >
                <button
                  type="submit"
                  className=" w-full h-full  !text-gray-100 !rounded-md !bg-blue-400 hover:!bg-blue-500"
                >
                  Done
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default InputPlace;
