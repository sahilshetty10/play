import React, { useEffect, useState } from "react";
import QuestionPic from "./QuestionPic";

function MCQPIC({ setScreen }) {
  const [questionNo, setQuestionNo] = useState(1);
  useEffect(() => {
    if (questionNo === 4) {
      setScreen(5);
    }
  }, [questionNo]);
  return (
    <>
      {questionNo === 1 && (
        <QuestionPic
          question="Who's the cutest??"
          src1=""
          src2=""
          setQuestionNo={setQuestionNo}
        />
      )}
      {questionNo === 2 && (
        <QuestionPic
          question="Who has the best smile?"
          src1=""
          src2=""
          setQuestionNo={setQuestionNo}
        />
      )}
      {questionNo === 3 && (
        <QuestionPic
          question="Who has the best forehead??"
          src1=""
          src2=""
          setQuestionNo={setQuestionNo}
        />
      )}
    </>
  );
}

export default MCQPIC;
