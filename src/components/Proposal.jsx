import React, { useState } from "react";

function Proposal({ setScreen }) {
  // list of text changes to no
  const options = [
    "No",
    "What!?",
    "Are you sure?",
    "I don't believe this!",
    "You are joking right?",
    "You don't have an option!",
    "Yes!",
  ];
  // state to keep track of which option to show and stop at the last one
  const [optionIndex, setOptionIndex] = useState(0);
  // function to handle button click and change the option text
  const handleClick = () => {
    if (optionIndex < options.length - 1) {
      setOptionIndex(optionIndex + 1);
    } else {
      setScreen(7);
    }
  };
  const [you, setYou] = useState(false);
  const [be, setBe] = useState(false);
  const [my, setMy] = useState(false);
  const [girlfriend, setGirlfriend] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  setTimeout(() => {
    setYou(true);
  }, 1000);
  setTimeout(() => {
    setBe(true);
  }, 2000);
  setTimeout(() => {
    setMy(true);
  }, 3000);
  setTimeout(() => {
    setGirlfriend(true);
  }, 4000);
  setTimeout(() => {
    setShowOptions(true);
  }, 5000);

  return (
    <section className="p-4 h-screen w-screen flex flex-col items-center justify-center gap-6 animate-fadeIn text-pink-700 bg-pink-100">
      <div className="flex gap-4">
        <h1 className="text-4xl font-bold text-center animate-fadeIn transition duration-300">
          Will
        </h1>
        {you && (
          <h1 className="text-4xl font-bold text-center animate-fadeIn transition duration-300">
            You
          </h1>
        )}
        {be && (
          <h1 className="text-4xl font-bold text-center animate-fadeIn transition duration-300">
            Be
          </h1>
        )}
        {my && (
          <h1 className="text-4xl font-bold text-center animate-fadeIn transition duration-300">
            My
          </h1>
        )}
        {girlfriend && (
          <h1 className="text-4xl font-bold text-center animate-fadeIn transition duration-300">
            Girlfriend?
          </h1>
        )}
      </div>
      {showOptions && (
        <div className="flex gap-4">
          <button
            className="px-8 py-2 bg-pink-700 text-pink-100 rounded-full"
            onClick={() => setScreen(7)}
          >
            Yes
          </button>
          <button
            className="px-8 py-2 bg-pink-700 text-pink-100 rounded-full "
            onClick={handleClick}
          >
            {options[optionIndex]}
          </button>
        </div>
      )}
    </section>
  );
}

export default Proposal;
