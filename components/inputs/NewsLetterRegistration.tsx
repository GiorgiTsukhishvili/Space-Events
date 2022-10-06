import React, { useState } from "react";

const NewsLetterRegistration = () => {
  const [newsEmail, setNewsEmail] = useState<string>("");

  return (
    <section className="my-12 flex items-center flex-col">
      <h1 className="text-center text-2xl">Sign up to stay updated!</h1>

      <form>
        <div className="mt-3 flex justify-center">
          <input
            type="text"
            className="p-1 w-[300px] border-[2px] focus:outline-none rounded-l-[8px] border-gray"
            value={newsEmail}
            onChange={(e) => setNewsEmail(e.target.value)}
          />

          <button className=" bg-purple-600 text-white px-4 py-1 rounded-r-[8px] duration-300 inline-block text-lg">
            Register
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewsLetterRegistration;
