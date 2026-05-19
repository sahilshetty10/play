import React, { useEffect, useState } from "react";

function Question({
  question,
  option1,
  option2,
  rightAnswerReply,
  wrongAnswerReply,
  setQuestionNo,
}) {
  const [answer, setAnswer] = useState(null);
  useEffect(() => {
    if (answer) {
      const timer = setTimeout(() => {
        setAnswer(null);
        setQuestionNo((prev) => prev + 1);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [answer]);

  return (
    <section className="p-4 h-screen w-screen flex flex-col items-center justify-center gap-6 animate-fadeIn text-pink-700 bg-pink-100">
      <h1 className="text-4xl font-bold text-center">{question}</h1>
      <div className="flex gap-4">
        <button
          className="px-4 py-2 rounded-full bg-pink-700 text-pink-100"
          onClick={() => setAnswer("yes")}
        >
          {option1}
        </button>
        <button
          className="px-4 py-2 rounded-full bg-pink-700 text-pink-100"
          onClick={() => setAnswer("no")}
        >
          {option2}
        </button>
      </div>
      {answer === "yes" && (
        <section className="h-full w-full flex items-center justify-center fixed z-10  text-pink-700 bg-pink-100">
          <h1 className="font-bold text-4xl text-center">{rightAnswerReply}</h1>
        </section>
      )}
      {answer === "no" && (
        <section className="h-full w-full flex items-center justify-center fixed z-10  text-pink-700 bg-pink-100">
          <h1 className="font-bold text-4xl text-center">{wrongAnswerReply}</h1>
        </section>
      )}
    </section>
  );
}

export default Question;
