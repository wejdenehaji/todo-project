import React, { Children, useState } from "react";

import { item } from "../ToDoPage";
interface props {
  task: item;
  deleteTask: (task: item) => void;
  updateTask: (task: item, TaskState: string) => void;
}
const categoryColorMap = new Map<string, { bg: string; text: string }>();

let colors = [
  { bg: "rgba(254, 202, 202, 0.7)", text: "#b91c1c" }, // red
  { bg: "rgba(251, 146, 60, 0.7)", text: "#c2410c" }, // orange
  { bg: "rgba(253, 230, 138, 0.7)", text: "#78350f" }, // amber
  { bg: "rgba(217, 249, 157, 0.8)", text: "#4d7c0f" }, // lime
  { bg: "rgba(110, 231, 183, 0.7)", text: "#047857" }, // emerald
  { bg: "rgba(125, 211, 252, 0.7)", text: "#0369a1" }, // sky
  { bg: "rgba(244, 114, 182, 0.7)", text: "#be185d" }, // fuchsia
  { bg: "rgba(249, 168, 212, 0.7)", text: "#9d174d" }, // pink
];

const OneTask = ({ task, deleteTask, updateTask }: props) => {
  const [TaskState, setTaskState] = useState<string>(
    task.status || "Not started"
  );
  const [expandedTaskState, setExpandedTaskState] = useState(false);

  const taskStates = [
    { btnText: "Not started", title: "To-do" },
    { btnText: "In progress", title: "In progress" },
    { btnText: "Done", title: "Complete" },
  ];
  const changeState = (stateTask: string) => {
    setExpandedTaskState(false);
    setTaskState(stateTask);
    updateTask(task, stateTask);
  };

  function getCategoryColor(category: string) {
    if (categoryColorMap.has(category)) {
      return categoryColorMap.get(category);
    }

    const newColor = colors[Math.floor(Math.random() * colors.length)];
    colors = colors.filter((color) => color !== newColor);

    categoryColorMap.set(category, newColor);

    return newColor;
  }

  return (
    <>
      <div
        className="grid grid-rows w-80
        sm:w-70
        md:w-60
         h-50 !p-3 !bg-white rounded-lg !shadow-sm !border-l-5 row-span-9"
        style={{ borderColor: getCategoryColor(task.category)?.bg }}
      >
        <div className="flex items-center justify-between w-full ">
          <div
            className="flex items-center text-xs !px-4 font-semibold !rounded-full !py-1"
            style={{
              backgroundColor: getCategoryColor(task.category)?.bg,
              color: getCategoryColor(task.category)?.text,
            }}
          >
            <p className="">{task.category}</p>
          </div>
          <button onClick={() => deleteTask(task)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentcolor"
              className="bi bi-trash size-3.5  text-gray-500"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
            </svg>
          </button>
        </div>

        <p className="text-meduim !leading-snug">{task.task}</p>
        <div className=" flex items-center justify-between">
          <p className="text-[14px] text-gray-600">{`\u23F1${task.deadline}`}</p>
          <div className="flex items-center justify-around gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 text-gray-300 hover:text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.019 4.09a.563.563 0 00.424.308l4.517.656a.562.562 0 01.312.958l-3.27 3.19a.563.563 0 00-.162.498l.771 4.49a.562.562 0 01-.815.593l-4.04-2.126a.562.562 0 00-.524 0l-4.04 2.126a.562.562 0 01-.815-.593l.77-4.49a.563.563 0 00-.162-.498l-3.27-3.19a.562.562 0 01.312-.958l4.518-.656a.563.563 0 00.424-.308l2.019-4.09z"
              />
            </svg>

            <div
              className={`relative shadow-sm bg-gray-200 rounded-xl !py-0.5 !px-1 !z-50 text-[15px] ${
                TaskState == "Done" ? "line-through text-gray-400" : ""
              } `}
            >
              <button
                onClick={() => {
                  setExpandedTaskState(!expandedTaskState);
                }}
              >
                {TaskState}
              </button>
              {expandedTaskState && (
                <div className="absolute top-full left-0 !mt-1 w-max bg-white !shadow-lg rounded-lg !z-50 !p-2 flex flex-col items-center justify-between">
                  {taskStates.map((elem) => (
                    <div key={elem.btnText} className="mb-1 px-2 py-1">
                      <p className="text-[12px] text-gray-400 ">{elem.title}</p>
                      <button
                        className="  text-[13px] !mb-0.5   !text-gray-600  !px-0.5 !py-0.5 hover:!text-gray-900 hover:!border-b-1 hover:!border-gray-500"
                        onClick={() => changeState(elem.btnText)}
                      >
                        {elem.btnText}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneTask;
