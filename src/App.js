import { useEffect, useState } from "react";
import "./App.scss";
import List from "./Components/List";
import { useGame } from "./useGame";


function App() {

  const handleinput = () => {
    if (every.includes(input.trim())) {
      addUserValue(input.trim());
      setMessage("Done");
      setTriger((prev) => ++prev);
      setInput("");
    } else {
      setMessage("Nope");
      setTriger(prev => ++prev)
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Enter") {
        handleinput();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleinput]);

const [triger, setTriger] = useState(0);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [triger]);

  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [key, setKey] = useState("");
  const [input, setInput] = useState("");
  const {
    reset,
    showEvery,
    userValue,
    addUserValue,
    every,
    commonCards,
    rareCards,
    epicCards,
    legendCards,
    championCards,
    towerTrops,
    spells,
    buildings,
  } = useGame();

  return (
    <div className="container">
      <p className={`message ${show ? "fade-in" : "fade-out"}`}>{message}</p>
      <div className="container__up">
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button onClick={handleinput}>Try</button>
        <button onClick={reset}>Reset</button>
        <button onClick={showEvery}>Give up</button>
      </div>
      <p>
        {userValue.length}/{every.length}
      </p>
      <div className="lists">
        <List title="Обычные" data={commonCards} />
        <List title="Редкие" data={rareCards} className={"rare"} />
        <List title="Эпические" data={epicCards} className={"epic"} />
        <List title="Легендарные" data={legendCards} className={"legendary"} />
        <List title="Чемпионы" data={championCards} className={"champion"} />
        <div>
          <List title="Воины на башне" data={towerTrops} />
          <List title="Постройки" data={buildings} />
        </div>

        <List title="Заклинания" data={spells} className={"spells"} />
      </div>
    </div>
  );
}

export default App;
