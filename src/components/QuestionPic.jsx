import React, { useEffect, useState } from "react";

function QuestionPic({ question, src1, src2, setQuestionNo }) {
  const [answer, setAnswer] = useState(null);
  useEffect(() => {
    if (answer === "wrong") {
      const timer = setTimeout(() => {
        setAnswer(null);
      }, 1000);

      return () => clearTimeout(timer);
    }
    if (answer === "right") {
      const timer = setTimeout(() => {
        setAnswer(null);
        setQuestionNo((prev) => prev + 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [answer]);
  return (
    <section
      className={`p-4 h-screen w-screen flex flex-col items-center justify-center gap-6 animate-fadeIn text-pink-700 transition duration-500 ${answer === "right" ? "bg-green-500" : ""} ${answer === "wrong" ? "bg-red-700" : ""} ${answer ? "cursor-not-allowed" : "bg-pink-100"}`}
    >
      <h1
        className={`text-4xl font-bold text-center transition ${answer ? "text-white" : "text-pink-700"}`}
      >
        {question}
      </h1>
      <div className="flex gap-16">
        <img
          src={""}
          className={`h-64 w-64 object-cover rounded-3xl ${answer ? "border-none" : "border-4"} border-pink-700 cursor-pointer`}
          onClick={() => setAnswer("right")}
        />
        <img
          src={""}
          className={`h-64 w-64 object-cover rounded-3xl ${answer ? "border-none" : "border-4"} border-pink-700 cursor-pointer ${answer === "wrong" ? "animate-shake" : ""}`}
          onClick={() => setAnswer("wrong")}
        />
      </div>
    </section>
  );
}

export default QuestionPic;
