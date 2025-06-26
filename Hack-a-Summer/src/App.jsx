import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
import BFooter from "./BottomFooter.jsx";
import Flags from "./assets/flags.jpg";
import Mythology from "./assets/mythology.avif";
import Tech from "./assets/tech.jpg";
import Pop from "./assets/pop.jpg";
import Menu from './Menu';
import GameGrid from './Game.jsx';

function App() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);
  const [gameConfig, setGameConfig] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleStart = (config) => {
  console.log("Partita avviata con:", config);
  navigate('/game', { state: config });
  };

  const handleBack = () => setActiveMenu(null);

  const handleButtonClick = (buttonNum) => {
    setSelectedButton(buttonNum);
  };

  const handleClosePopup = () => {
    setSelectedButton(null);
  };

  return (
    <>
      <Navbar />
      {!gameConfig && (
        <>
          <section className="Main">
            <Card 
              title="Trivia Royale: World Flags" 
              desc="Test your knowledge of world flags in a race against the clock." 
              backgroundImage={Flags}
              td="Category: Geography · 10 Questions"
              onClick={() => setActiveMenu({ title: "Trivia Royale: World Flags", category: "Flags" })}
            />
            <Card 
              title="Quickfire: Greek Mythology" 
              desc="Do you know your gods from your titans? Find out in this mythology quiz." 
              backgroundImage={Mythology}
              td="Category: History · 15 Questions"
              onClick={() => setActiveMenu({ title: "Trivia Royale: World", category: "Greece" })}
            />
          </section>

          <section className="Main2">
            <Card 
              title="Brain Brawl: Tech Edition" 
              desc="Challenge yourself with questions on programming, hardware, and internet lore." 
              backgroundImage={Tech}
              td="Category: Technology · 12 Questions"
              onClick={() => setActiveMenu({ title: "Trivia Royale: Flags", category: "Internet" })}
            />
            <Card 
              title="Pop Culture Showdown" 
              desc="From 2000s sitcoms to viral TikToks — how well do you really know pop culture?" 
              backgroundImage={Pop}
              td="Category: Entertainment · 20 Questions"
              onClick={() => setActiveMenu({ title: "Trivia: World Flags", category: "cultura" })}
            />
          </section>

          {activeMenu && (
            <Menu
            title={activeMenu.title}
            onBack={handleBack}
            onStart={(config) => {
            handleStart({ ...config, category: activeMenu.category });
             }}
            />
          )}
          <Footer />
          <BFooter />
        </>
      )}

      {gameConfig && (
        <>
          <GameGrid onButtonClick={handleButtonClick} />
          {selectedButton !== null && (
            <div className="overlay" onClick={handleClosePopup}>
              <div className="popup" onClick={(e) => e.stopPropagation()}>
                <h2>Popup bottone {selectedButton}</h2>
                <p>Qui puoi mettere un menu o altre opzioni.</p>
                <button className="close-btn" onClick={handleClosePopup}>Chiudi</button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default App;