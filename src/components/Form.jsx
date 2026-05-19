import React, { useState } from "react";

function Form({ setScreen }) {
  const [wrongName, setWrongName] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    if (name.trim() === "") {
      return;
    }
    if (name.toLowerCase() !== "ruchi") {
      setWrongName(true);
      return;
    }
    if (name.toLowerCase() === "ruchi") {
      setScreen(3);
    }
  };
  return (
    <>
      <section
        className={` ${wrongName ? "block" : "hidden"} p-4 h-full w-full flex items-center justify-center fixed z-10 bg-gray-800`}
      >
        <div className="absolute top-0 left-0 h-full w-full bg-red-900 animate-pulse z-20"></div>
        <div className="absolute z-30 flex flex-col gap-8 animate-fadeIn">
          <h1 className="text-center font-bold text-6xl text-white">
            WHO ARE YOU??!! <br></br> GET OUT OF HERE
          </h1>
          <button
            className="px-8 py-4 bg-pink-700 text-pink-100 rounded-full"
            onClick={() => setWrongName(false)}
          >
            Try Again
          </button>
        </div>
      </section>
      <section className="p-4 h-screen w-screen flex flex-col items-center justify-center gap-6 animate-fadeIn text-pink-700 bg-pink-100">
        <h1 className="text-center font-bold text-4xl">Who Are You???</h1>

        <form
          className="flex flex-col items-center gap-4"
          onSubmit={handleSubmit}
        >
          <input
            className="border-4 px-8 py-4 rounded-full"
            type="text"
            placeholder="No strangers allowed here!"
          />
          <button
            type="submit"
            className="px-8 py-2 bg-pink-700 text-pink-100 rounded-full"
          >
            Enter
          </button>
        </form>
      </section>
    </>
  );
}

export default Form;
