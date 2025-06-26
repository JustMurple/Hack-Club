import { useState } from 'react';

function Menu({ onBack, onStart, title}) {
  const [mode, setMode] = useState("classic");
  const [timeLimit, setTimeLimit] = useState("10");
  const [teamMode, setTeamMode] = useState("solo");
  const handleStart = () => {
    onStart({ mode, timeLimit: Number(timeLimit) });
  };

  return (
    <div className="overlay-menu">
      <div className="menu-content">
        <button onClick={onBack}>Torna indietro</button>
        <h2>{title}</h2>
        <label>
          Modalità:
          <select value={mode} onChange={e => setMode(e.target.value)}>
            <option value="classic">Classica</option>
            <option value="survival">Sopravvivenza</option>
            <option value="timed">Sfida a Tempo</option>
            <option value="combo">Combo</option>
          </select>
        </label>
        <br />
        <label>
          Tempo limite (secondi):
          <select value={timeLimit} onChange={e => setTimeLimit(e.target.value)}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="60">60</option>
          </select>
        </label>
        <br />
        <label>
          versus mode:
          <select value={teamMode} onChange={e => setTeamMode(e.target.value)}>
            <option value="solo">solo</option>
            <option value="two">1v1</option>
          </select>
        </label>
        <br />
        <button onClick={() => handleStart({ mode, timeLimit })}>Inizia</button>


      </div>
    </div>
  );
}

export default Menu;
