import { useState, useEffect, useRef } from "react";
import Intro from "./components/Intro.jsx";
import Form from "./components/Form.jsx";
import MCQ from "./components/MCQ.jsx";
import MCQPIC from "./components/MCQPIC.jsx";
import Finale from "./components/Finale.jsx";
import Proposal from "./components/Proposal.jsx";
import Outro from "./components/Outro.jsx";

function App() {
  const [screen, setScreen] = useState(1);
  const audioRef = useRef(null);

  return (
    <main>
      <audio ref={audioRef} loop className="hidden">
        <source src="/bg_music.mp3" type="audio/mpeg" />
      </audio>
      {screen === 1 && <Intro setScreen={setScreen} audioRef={audioRef} />}
      {screen === 2 && <Form setScreen={setScreen} />}
      {screen === 3 && <MCQ setScreen={setScreen} />}
      {screen === 4 && <MCQPIC setScreen={setScreen} />}
      {screen === 5 && <Finale setScreen={setScreen} />}
      {screen === 6 && <Proposal setScreen={setScreen} />}
      {screen === 7 && <Outro />}
    </main>
  );
}

export default App;
