import React from "react";

const EventsSearch = () => {
  return (
    <form className="my-[2rem] sm:flex-row mx-auto shadow-lg p-[1rem] bg-white rounded-[8px] w-[90%] max-w-[40rem] flex justify-between flex-col gap-[1rem]">
      <div className="w-full flex gap-4 flex-col sm:w-[80%] sm:flex-row">
        <div className="flex-1 flex gap-4 items-center justify-between">
          <label htmlFor="year" className="font-bold">
            Year
          </label>
          <select
            id="year"
            className="sm:w-full border-gray-300 border-[2px] outline-none text-inherit bg-white rounded-[6px] w-[70%] p-1"
          >
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className="flex-1 flex gap-4 items-center justify-between">
          <label htmlFor="month" className="font-bold">
            Month
          </label>
          <select
            id="month"
            className="sm:w-full text-inherit border-gray-300 outline-none border-[2px] bg-white rounded-[6px] w-[70%] p-1"
          >
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <button className="sm:w-[20%] w-full rounded-[8px] py-1 px-2 text-white bg-purple-600">
        Find Events
      </button>
    </form>
  );
};

export default EventsSearch;
