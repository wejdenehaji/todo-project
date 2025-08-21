import React, { useState } from "react";
interface props {
  setLabel: (label: string) => void;
  setChosenCategory: (catego: string) => void;
  setSort: (sort: string) => void;
}

const SortTask = ({ setLabel, setChosenCategory, setSort }: props) => {
  const labelArray = ["Default", "Not started", "In progress", "Done"];
  const deadlineArray = ["Default", "Most urgent", "Least urgent"];
  let localCategories: string[] = localStorage.getItem("categories")
    ? JSON.parse(localStorage.getItem("categories") as string)
    : ["All"];

  return (
    <>
      <div className="grid grid-cols-3 gap-4 items-center w-sm sm:w-md !p-1 ">
        <div id="status" className="flex flex-col ">
          <label className="text-gray-500 text-xs">Label</label>
          <select className="outline-none !text-sm !text-gray-700 !font-medium !px-1 !py-1  !rounded-3xl hover:!bg-gray-50"
           onChange={(e) => setLabel(e.target.value)}>
            {labelArray.map((label) => (
              <option key={label} value={label}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <div id="category"  className="flex flex-col !px-2 ">
          <label className="text-gray-500 text-xs">Category</label>
          <select className="outline-none !text-sm !text-gray-700 !font-medium !px-1 !py-1  !rounded-3xl hover:!bg-gray-50"
          onChange={(e) => setChosenCategory(e.target.value)}>
            <option key="Default" value="Default">
              {"Default"}
            </option>
            {localCategories.map((catego) => (
              <option key={catego} value={catego}>
                {catego}
              </option>
            ))}
          </select>
        </div>
        <div id="sort"  className="flex flex-col !px-2 ">
          <label className="text-gray-500 text-xs">Sort</label>
          <select className="outline-none !text-sm !text-gray-700 !font-medium !px-1 !py-1  !rounded-3xl hover:!bg-gray-50"
          onChange={(e) => setSort(e.target.value)}>
            {deadlineArray.map((sort) => (
              <option key={sort} value={sort}>
                {sort}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default SortTask;
