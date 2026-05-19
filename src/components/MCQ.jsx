import React, { useEffect, useState } from "react";
import Question from "./Question";

function MCQ({ setScreen }) {
  const [questionNo, setQuestionNo] = useState(1);
  useEffect(() => {
    if (questionNo === 4) {
      setScreen(4);
    }
  }, [questionNo]);

  return (
    <>
      {questionNo === 1 && (
        <Question
          question="Do you like me??"
          option1="Yes"
          option2="No"
          rightAnswerReply="I like you too!!"
          wrongAnswerReply="Good joke lol!!!!"
          setQuestionNo={setQuestionNo}
        />
      )}
      {questionNo === 2 && (
        <Question
          question="Do you have a big forehead??"
          option1="Yes"
          option2="Obviously"
          rightAnswerReply="That's right and I love it!🥰"
          wrongAnswerReply="Yes you do! and I love it!🥰"
          setQuestionNo={setQuestionNo}
        />
      )}
      {questionNo === 3 && (
        <Question
          question="Am I Annoying?"
          option1="Yes"
          option2="No"
          rightAnswerReply="You are correct! But you have no choice!🥰"
          wrongAnswerReply="Aww thank youu but dw I'll be annoying you soon 😘"
          setQuestionNo={setQuestionNo}
        />
      )}
    </>
  );
}

export default MCQ;
