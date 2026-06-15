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
          question="Who is funnier?"
          option1="Ruchi"
          option2="Sahil"
          rightAnswerReply="Keep telling yourself that, it's adorable!!"
          wrongAnswerReply="At least you're self-aware. Don't worry, I carry enough humor for both of us!"
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
          question="Do you love me even when I'm being annoying?"
          option1="Yes"
          option2="No"
          rightAnswerReply="I knew you were a saint. Thanks for putting up with my greatness 🥰"
          wrongAnswerReply="Fake news. You adore my chaos, just admit it 😘"
          setQuestionNo={setQuestionNo}
        />
      )}
    </>
  );
}

export default MCQ;
