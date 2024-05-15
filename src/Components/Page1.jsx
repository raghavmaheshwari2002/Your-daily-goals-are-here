import { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Chart } from "chart.js/auto";
import { GoGoal } from "react-icons/go";
import { FaCheckSquare } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import { CgGym } from "react-icons/cg";
import { FaBookReader } from "react-icons/fa";
import { FaWalking } from "react-icons/fa";
import { IoIosMoon } from "react-icons/io";
import { IoWaterOutline } from "react-icons/io5";

import React from 'react'

const page1 = () => {

    const [isSwiped, setIsSwiped] = useState(false);

    const toggleSwipe = () => {
        setIsSwiped(!isSwiped);
      };




  return (
    <>
    <div className="cstm3 m-10 p-3 ">
    <GoGoal size={70} className="pr-3" />
    <div>
      <h3 className="">Your Daily Goal Almost Done</h3>
      <p className="text-sm">4 Of 5 Completed</p>
      <ProgressBar
        completed={80}
        customLabel="."
        height="2px"
        width="250px"
        bgColor="white"
        baseBgColor="#659cd0"
        className="p-1"
      />
      <span className=" float-right text-xs">80%</span>
    </div>
  </div>
  <div>
    <h2 className="text-lg m-7">
      Today's Goal
      <span className="float-right">
        <lord-icon
          src="https://cdn.lordicon.com/axpfmqyc.json"
          trigger="loop"
          state="loop-cycle"
          colors="primary:#ffffff,secondary:#f24c00"
        ></lord-icon>
      </span>
    </h2>
  </div>

  <div className="w-4/5 text-lg mx-auto">
    <div className="w-full mb-5 p-4 bg-[#282828] rounded-lg flex">
      {" "}
      <CgGym className="mr-3 ml-2 " size={30} />
      <span className="w-full">Workout for 20 mins </span>
      <FaCheckSquare className="float-right text-3xl " />
    </div>

    <div className=" w-full mb-5 p-4 bg-[#282828] rounded-lg flex">
      {" "}
      <FaBookReader className="mr-3 ml-2" size={30} />
      <span className="w-full">Read book for 15 mins</span>
      <FaCheckSquare className=" float-right text-3xl " />
    </div>

    <div className=" w-full mb-5 p-4  bg-[#282828] rounded-lg flex">
      {" "}
      <FaWalking className="mr-3 ml-2" size={30} />
      <span className="w-full">30 mins Walk </span>
      <FaCheckSquare className=" float-right text-4xl " />
    </div>

    <div className=" w-full mb-5 p-4 bg-[#282828] rounded-lg flex">
      {" "}
      <IoIosMoon className="mr-3 ml-2" size={30} />
      <span className="w-full">Sleep at 11 sharp </span>
      <FaCheckSquare className=" float-right text-4xl pt-1 " />
    </div>
    <div className=" w-full mb-5 p-4 bg-[#282828] rounded-lg flex">
      {" "}
      <IoWaterOutline className="mr-3 ml-2" size={30} />
      <span className="w-full">Drink 3L Water </span>
      <FaCheckSquare className=" float-right text-4xl " />
    </div>
  </div>

  <div className="flex justify-center items-center mb-3">
    <div className=" bg-[#d15439] hover:bg-[#de4040] p-2 font-semibold rounded-full w-5/6 ">
      <button
        onMouseDown={toggleSwipe}
        className={` bg-white text-[#d15450]
pt-3 pb-3 pl-1 pr-1 rounded-full shadow-sm transition duration-300 ease-in-out transform ${
isSwiped ? "translate-x-[312px]" : ""
}
`}
      >
        Track
      </button>
      <span className=" ml-9 text-lg text-center ">
        {isSwiped
          ? "Swipe Left for Daily Goal"
          : "Swipe Right to Track All"}
      </span>
    </div>
  </div>

  <Bar
    className="text-white p-2 m-7 mt-10 mb-24 bg-[#282828] rounded-2xl"
    data={{
      labels: [
        "28/4",
        "30/4",
        "02/5",
        "05/5",
        "11/5",
        "15/5",
        "20/5",
        "22/5",
      ],
      datasets: [
        {
          label: "Percentage of Goal per Day",
          data: [92, 100, 98, 90, 84, 82, 80, 80],
          backgroundColor: "#5a92cb",
          barThickness: "15",
        },
      ],
    }}
  />

  </>
  )
}

export default page1
