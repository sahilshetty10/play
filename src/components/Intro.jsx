import React from "react";

import { useState, useEffect } from "react";

function Intro({ setScreen, audioRef }) {
  const [part, setPart] = useState(1);

  useEffect(() => {
    if (part === 1) {
      const timer = setTimeout(() => {
        setPart(2);
        audioRef.current.volume = 0.3;
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [part]);

  return (
    <section className="p-4 h-screen w-screen flex flex-col items-center justify-center gap-6 animate-fadeIn bg-pink-100 text-pink-600">
      {part === 1 && <h1 className="text-center font-bold text-6xl ">Hello</h1>}
      {part === 2 && (
        <section className="h-screen w-screen flex flex-col items-center justify-center gap-6 animate-fadeIn">
          <h1 className=" text-center font-bold text-4xl animate-bounce">
            Lets Play A Game!
          </h1>
          <button
            className="px-8 py-2 bg-pink-700 text-pink-100 rounded-full"
            onClick={() => {
              setScreen(2);
              audioRef.current.play();
            }}
          >
            Start
          </button>
        </section>
      )}
    </section>
  );
}

export default Intro;
