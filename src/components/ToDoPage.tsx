import React, { useState, useEffect } from "react";
import InputPlace from "./ToDoComponents/InputPlace";
import OneTask from "./ToDoComponents/OneTask";
import SortTask from "./ToDoComponents/SortTask";
export type item = {
  task: string;
  category: string;
  deadline: string;
  status: string;
};

const ToDoPage = () => {
  const [todoList, setTodoList] = useState<item[]>([]);
  const [label, setLabel] = useState("Default");
  const [chosenCategory, setChosenCategory] = useState("Default");
  const [sort, setSort] = useState("Default");

  useEffect(() => {
    const storedTasks = localStorage.getItem("todoList");
    if (storedTasks) {
      setTodoList(JSON.parse(storedTasks));
    }
  }, []);
  const addTask = (newTask: item) => {
    setTodoList((prev) => [...prev, newTask]);
  };
  const deleteTask = (oldTask: item) => {
    const storedTasks = localStorage.getItem("todoList");
    if (storedTasks) {
      let newTodoList: item[] = JSON.parse(storedTasks);
      newTodoList = newTodoList.filter(
        (task) =>
          !(
            task.task === oldTask.task &&
            task.category === oldTask.category &&
            task.deadline === oldTask.deadline
          )
      );
      setTodoList(newTodoList);
      localStorage.setItem("todoList", JSON.stringify(newTodoList));
    }
  };
  const updateTask = (task: item, TaskState: string) => {
    const newTodoList = todoList.map((t) =>
      t.task == task.task &&
      t.category == task.category &&
      t.deadline == task.deadline
        ? { ...t, status: TaskState }
        : t
    );
    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
  };
  const DisplayTasks = () => {
    let newTodoList = todoList.filter(
      (item) =>
        (label == "Default" || item.status === label) &&
        (chosenCategory == "Default" || item.category === chosenCategory)
    );
    console.log(todoList);
    sort != "Default"
      ? sort == "Most urgent"
        ? newTodoList.sort(
            (a, b) =>
              new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
          )
        : newTodoList.sort(
            (a, b) =>
              new Date(b.deadline).getTime() - new Date(a.deadline).getTime()
          )
      : null;

    return newTodoList.length === 0 ? (
      <div>No Task added yet!</div>
    ) : (
      newTodoList.map((item) => (
        <OneTask
          task={item}
          key={`${item.task}-${item.category}`}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))
    );
  };

  return (
    <>
      <div className="bg-gradient-to-br from-gray-100 via-gray-50 to-white grid grid-rows-[auto_1fr] h-[95vh] gap-3.5 ">
        <div className="flex items-center justify-between">
          <p className=" !p-3 text-lg font-semibold text-gray-700">
            It's Good to have you back,
            <span className="text-blue-500"> userName!</span>
          </p>{" "}
          <div className="flex justify-center sm:justify-end items-center !mr-2 !p-1">
            <SortTask
              setLabel={setLabel}
              setChosenCategory={setChosenCategory}
              setSort={setSort}
            />
          </div>
        </div>

        <div
          className="grid grid-cols-1
          sm:grid-cols-2 
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5 auto-rows-[1rem]  grid-flow-dense gap-2 overflow-y-auto !p-2 justify-items-center"
        >
          <InputPlace addTask={addTask} />
          {DisplayTasks()}
        </div>
      </div>
    </>
  );
};

export default ToDoPage;
