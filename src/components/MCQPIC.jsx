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
          question="What's my favorite notification??"
          src1="/firstReply.jpeg"
          src2="/arsenalWin.jpeg"
          setQuestionNo={setQuestionNo}
        />
      )}
      {questionNo === 2 && (
        <QuestionPic
          question="Who has the best smile?"
          src1="/ruchiSmile.jpeg"
          src2="/smile.jpeg"
          setQuestionNo={setQuestionNo}
        />
      )}
      {questionNo === 3 && (
        <QuestionPic
          question="Who has the best forehead??"
          src1="/ruchiForehead2.jpeg"
          src2="/forehead.jpeg"
          setQuestionNo={setQuestionNo}
        />
      )}
    </>
  );
}

export default MCQPIC;
