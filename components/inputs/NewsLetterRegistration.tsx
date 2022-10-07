import React, { useState } from "react";

const NewsLetterRegistration = () => {
  const [newsEmail, setNewsEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: newsEmail }),
      headers: { "Content-Type": "application/json" },
    }).then(() => setNewsEmail(""));
  };

  return (
    <section className="my-12 flex items-center flex-col">
      <h1 className="text-center text-2xl">Sign up to stay updated!</h1>

      <form onSubmit={handleSubmit}>
        <div className="mt-3 flex justify-center">
          <input
            type="email"
            className="p-1 w-[300px] border-[2px] focus:outline-none rounded-l-[8px] border-gray"
            value={newsEmail}
            required
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
