import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const questionBanks = {
  Flags: [
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Brisbane"],
      answer: 1,
    },
    {
      question: "Which country has the largest population?",
      options: ["India", "China", "USA", "Russia"],
      answer: 1,
    },
    {
      question: "Mount Everest is located in which mountain range?",
      options: ["Andes", "Alps", "Himalayas", "Rockies"],
      answer: 2,
    },
    {
      question: "Which river flows through Paris?",
      options: ["Thames", "Danube", "Seine", "Rhine"],
      answer: 2,
    },
    {
      question: "Which country is the smallest by area?",
      options: ["Monaco", "Nauru", "Vatican City", "San Marino"],
      answer: 2,
    },
    {
      question: "What is the longest river in the world?",
      options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      answer: 1,
    },
    {
      question: "Which continent is the Sahara Desert located in?",
      options: ["Asia", "Africa", "Australia", "South America"],
      answer: 1,
    },
    {
      question: "What ocean lies on the east coast of the USA?",
      options: ["Atlantic", "Pacific", "Indian", "Arctic"],
      answer: 0,
    },
    {
      question: "Which country has the most time zones?",
      options: ["USA", "Russia", "France", "China"],
      answer: 2,
    },
    {
      question: "Which is the largest island in the world?",
      options: ["Madagascar", "Greenland", "New Guinea", "Borneo"],
      answer: 1,
    },
    {
      question: "What is the capital of Canada?",
      options: ["Toronto", "Montreal", "Ottawa", "Vancouver"],
      answer: 2,
    },
    {
      question: "Which desert is the largest hot desert?",
      options: ["Gobi", "Sahara", "Kalahari", "Thar"],
      answer: 1,
    },
    {
      question: "Which country does the river Danube NOT flow through?",
      options: ["Germany", "Hungary", "France", "Romania"],
      answer: 2,
    },
    {
      question: "What is the capital city of Japan?",
      options: ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
      answer: 2,
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Japan", "South Korea", "Thailand"],
      answer: 1,
    },
    {
      question: "What sea lies between Africa and Europe?",
      options: ["Red Sea", "Mediterranean Sea", "Black Sea", "Caspian Sea"],
      answer: 1,
    },
    {
      question: "Which is the tallest waterfall in the world?",
      options: ["Niagara Falls", "Angel Falls", "Victoria Falls", "Iguazu Falls"],
      answer: 1,
    },
    {
      question: "Which US state is known as the 'Sunshine State'?",
      options: ["California", "Florida", "Texas", "Arizona"],
      answer: 1,
    },
    {
      question: "Which continent has the most countries?",
      options: ["Asia", "Africa", "Europe", "South America"],
      answer: 1,
    },
    {
      question: "Which country is famous for the Great Barrier Reef?",
      options: ["Australia", "New Zealand", "Fiji", "Indonesia"],
      answer: 0,
    },
  ],
  Greece: [
    {
      question: "Chi è il re degli dei nell'Olimpo greco?",
      options: ["Apollo", "Zeus", "Poseidone", "Ares"],
      answer: 1,
    },
    {
      question: "Chi è la dea della saggezza?",
      options: ["Afrodite", "Artemide", "Atena", "Era"],
      answer: 2,
    },
    {
      question: "Chi è il dio degli inferi?",
      options: ["Ermes", "Ares", "Ade", "Dioniso"],
      answer: 2,
    },
    {
      question: "Chi è il messaggero degli dei?",
      options: ["Ermes", "Apollo", "Efesto", "Poseidone"],
      answer: 0,
    },
    {
      question: "Quale eroe uccise Medusa?",
      options: ["Teseo", "Eracle", "Perseo", "Achille"],
      answer: 2,
    },
    {
      question: "Chi fu costretto a spingere un masso per l’eternità?",
      options: ["Sisifo", "Tantalo", "Prometeo", "Orfeo"],
      answer: 0,
    },
    {
      question: "Chi rapì Persefone?",
      options: ["Ade", "Poseidone", "Zeus", "Ares"],
      answer: 0,
    },
    {
      question: "Chi è la dea dell’amore?",
      options: ["Atena", "Afrodite", "Era", "Demetra"],
      answer: 1,
    },
    {
      question: "Quale dio era il fabbro dell’Olimpo?",
      options: ["Efesto", "Ares", "Apollo", "Ermes"],
      answer: 0,
    },
    {
      question: "Chi uccise il Minotauro?",
      options: ["Perseo", "Achille", "Teseo", "Eracle"],
      answer: 2,
    },
    {
      question: "Chi ha dato fuoco agli uomini?",
      options: ["Zeus", "Prometeo", "Ermes", "Ares"],
      answer: 1,
    },
    {
      question: "Chi era il dio del vino?",
      options: ["Apollo", "Dioniso", "Efesto", "Ermes"],
      answer: 1,
    },
    {
      question: "Quante fatiche ha compiuto Eracle?",
      options: ["10", "12", "7", "13"],
      answer: 1,
    },
    {
      question: "Chi era la madre di Achille?",
      options: ["Era", "Teti", "Atena", "Afrodite"],
      answer: 1,
    },
    {
      question: "Chi era l’auriga del Sole?",
      options: ["Ermes", "Elio", "Apollo", "Dioniso"],
      answer: 2,
    },
    {
      question: "Chi costruì il labirinto di Creta?",
      options: ["Dedalo", "Teseo", "Minosse", "Icaro"],
      answer: 0,
    },
    {
      question: "Chi è il dio del mare?",
      options: ["Zeus", "Ares", "Ade", "Poseidone"],
      answer: 3,
    },
    {
      question: "Chi fu trasformata in ragno da Atena?",
      options: ["Aracne", "Afrodite", "Teti", "Medusa"],
      answer: 0,
    },
    {
      question: "Chi è il padre di tutti gli dei?",
      options: ["Urano", "Crono", "Zeus", "Ade"],
      answer: 2,
    },
    {
      question: "Chi è il dio della guerra?",
      options: ["Ares", "Ermes", "Zeus", "Efesto"],
      answer: 0,
    },
  ],
  Internet: [
    {
      question: "Chi ha fondato Microsoft?",
      options: ["Steve Jobs", "Bill Gates", "Elon Musk", "Mark Zuckerberg"],
      answer: 1,
    },
    {
      question: "Qual è il linguaggio usato per il web frontend?",
      options: ["Python", "C++", "HTML", "SQL"],
      answer: 2,
    },
    {
      question: "Che cos'è un SSD?",
      options: ["Tipo di RAM", "Dispositivo di input", "Hard disk veloce", "Tipo di software"],
      answer: 2,
    },
    {
      question: "Quale azienda produce l’iPhone?",
      options: ["Samsung", "Apple", "Huawei", "Google"],
      answer: 1,
    },
    {
      question: "Cos'è un algoritmo?",
      options: ["Un'app", "Una sequenza di istruzioni", "Un software", "Un dispositivo"],
      answer: 1,
    },
    {
      question: "Cosa significa CPU?",
      options: ["Computer Primary Unit", "Central Processing Unit", "Central Print Unit", "Core Power Unit"],
      answer: 1,
    },
    {
      question: "Quale linguaggio è usato per sviluppare app Android?",
      options: ["Swift", "Python", "Java", "C#"],
      answer: 2,
    },
    {
      question: "Cos'è una GPU?",
      options: ["Scheda grafica", "Memoria", "CPU", "Hard disk"],
      answer: 0,
    },
    {
      question: "Chi ha fondato Tesla?",
      options: ["Jeff Bezos", "Bill Gates", "Elon Musk", "Steve Jobs"],
      answer: 2,
    },
    {
      question: "Cosa fa un antivirus?",
      options: ["Pulisce il monitor", "Protegge dai virus", "Aggiorna software", "Controlla la RAM"],
      answer: 1,
    },
    {
      question: "Cos'è una rete LAN?",
      options: ["Internet globale", "Rete locale", "Wi-Fi pubblico", "Backup dati"],
      answer: 1,
    },
    {
      question: "Cosa si usa per fare videoconferenze?",
      options: ["Calcolatrice", "Fotocamera", "Webcam", "Stampante"],
      answer: 2,
    },
    {
      question: "Che tipo di file è un .exe?",
      options: ["Documento", "Eseguibile", "Video", "Audio"],
      answer: 1,
    },
    {
      question: "Cos'è il cloud?",
      options: ["Software offline", "Memoria remota", "Hard disk esterno", "App mobile"],
      answer: 1,
    },
    {
      question: "Chi ha inventato il World Wide Web?",
      options: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Larry Page"],
      answer: 1,
    },
    {
      question: "Cos'è un QR Code?",
      options: ["Codice a barre", "Codice bidimensionale", "Link testuale", "File immagine"],
      answer: 1,
    },
    {
      question: "Quale di questi è un sistema operativo?",
      options: ["Photoshop", "Linux", "Chrome", "HTML"],
      answer: 1,
    },
    {
      question: "Cosa fa un firewall?",
      options: ["Protegge la rete", "Aumenta la RAM", "Aggiorna la CPU", "Pulisce lo schermo"],
      answer: 0,
    },
    {
      question: "Cos'è JavaScript?",
      options: ["Un gioco", "Un programma", "Un linguaggio di scripting", "Un virus"],
      answer: 2,
    },
    {
      question: "Cosa indica il termine 'phishing'?",
      options: ["Hack visivo", "Furto d’identità via email", "Errore di rete", "Virus lento"],
      answer: 1,
    },
  ],
  cultura: [
    {
      question: "Quale saga ha come protagonista Harry Potter?",
      options: ["Il Signore degli Anelli", "Percy Jackson", "Harry Potter", "Twilight"],
      answer: 2,
    },
    {
      question: "Chi è l’autore di One Piece?",
      options: ["Akira Toriyama", "Masashi Kishimoto", "Eiichiro Oda", "Yoshihiro Togashi"],
      answer: 2,
    },
    {
      question: "Chi ha scritto la canzone 'Thriller'?",
      options: ["Prince", "Michael Jackson", "Elvis Presley", "Stevie Wonder"],
      answer: 1,
    },
    {
      question: "Chi è Iron Man nel Marvel Cinematic Universe?",
      options: ["Chris Evans", "Robert Downey Jr.", "Mark Ruffalo", "Tom Holland"],
      answer: 1,
    },
    {
      question: "In quale serie c’è un trono fatto di spade?",
      options: ["Breaking Bad", "Game of Thrones", "The Witcher", "Vikings"],
      answer: 1,
    },
    {
      question: "Qual è il nome del mago grifondoro con la cicatrice?",
      options: ["Ron", "Draco", "Harry", "Neville"],
      answer: 2,
    },
    {
      question: "Chi canta 'Bad Guy'?",
      options: ["Dua Lipa", "Billie Eilish", "Ariana Grande", "Taylor Swift"],
      answer: 1,
    },
    {
      question: "Che personaggio dice 'Che la forza sia con te'?",
      options: ["Luke Skywalker", "Frodo", "Darth Vader", "Yoda"],
      answer: 0,
    },
    {
      question: "In quale città si svolge 'Friends'?",
      options: ["Los Angeles", "Chicago", "New York", "Boston"],
      answer: 2,
    },
    {
      question: "Chi ha diretto 'Titanic'?",
      options: ["Spielberg", "James Cameron", "Nolan", "Tarantino"],
      answer: 1,
    },
    {
      question: "Quale eroe Marvel è verde?",
      options: ["Iron Man", "Thor", "Hulk", "Capitan America"],
      answer: 2,
    },
    {
      question: "Qual è la casa di Hogwarts con il serpente?",
      options: ["Grifondoro", "Serpeverde", "Corvonero", "Tassorosso"],
      answer: 1,
    },
    {
      question: "Chi è il padre di Simba nel Re Leone?",
      options: ["Zazu", "Scar", "Mufasa", "Rafiki"],
      answer: 2,
    },
    {
      question: "Quale gruppo ha scritto 'Bohemian Rhapsody'?",
      options: ["The Beatles", "Queen", "Rolling Stones", "Pink Floyd"],
      answer: 1,
    },
    {
      question: "Chi interpreta Deadpool?",
      options: ["Ryan Reynolds", "Chris Pratt", "Brad Pitt", "Hugh Jackman"],
      answer: 0,
    },
    {
      question: "Dove vive SpongeBob?",
      options: ["Bikini Bottom", "Atlantide", "Springfield", "New York"],
      answer: 0,
    },
    {
      question: "Qual è il colore di Pikachu?",
      options: ["Rosso", "Verde", "Giallo", "Blu"],
      answer: 2,
    },
    {
      question: "Chi è l’antagonista principale in 'Avengers: Endgame'?",
      options: ["Loki", "Ultron", "Thanos", "Red Skull"],
      answer: 2,
    },
    {
      question: "Chi è la regina del pop?",
      options: ["Beyoncé", "Lady Gaga", "Madonna", "Rihanna"],
      answer: 2,
    },
    {
      question: "Come si chiama la spada di Link in Zelda?",
      options: ["Master Sword", "Hylian Blade", "Zelda Saber", "Shadow Sword"],
      answer: 0,
    },
  ],
};

const rowValues = [100, 200, 400, 500, 1000]; 
const rowsCount = 4;

export default function Game() {
  const location = useLocation();
  const { category = "Flags" } = location.state || {};
  const questions = questionBanks[category] || questionBanks["Flags"];
  const [score, setScore] = useState(0);
  const [selectedButton, setSelectedButton] = useState(null); 
  const [showPopup, setShowPopup] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answeredButtons, setAnsweredButtons] = useState({});
  const navigate = useNavigate();

  const questionIndex = (selectedButton?.row ?? 0) * rowValues.length + (selectedButton?.col ?? 0);
  const question = questions[questionIndex % questions.length];

  const handleButtonClick = (row, col) => {
    const btnKey = `${row}-${col}`;
    if (answeredButtons[btnKey]) return; 
    setSelectedButton({ row, col });
    setSelectedOption(null);
    setShowPopup(true);
    setCurrentQuestionIndex(questionIndex);
  };

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return; 
    const btnKey = `${selectedButton.row}-${selectedButton.col}`;
    if (answeredButtons[btnKey]) return; 

    const points = rowValues[selectedButton.col];

    if (selectedOption === question.answer) {
      setScore(score + points);
    } else {
      setScore(score - points);
    }

    setAnsweredButtons({ ...answeredButtons, [btnKey]: true });
    setShowPopup(false);
    setSelectedButton(null);
    setSelectedOption(null);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedButton(null);
    setSelectedOption(null);
  };

  return (
    <>
      <button className="back-button" onClick={() => navigate("/")}>
       ← Back
      </button>
      <div className="game-grid">
        {Array.from({ length: rowsCount }).map((_, row) => (
          <div className="grid-row" key={row}>
            {rowValues.map((points, col) => {
              const btnKey = `${row}-${col}`;
              return (
                <button
                  key={btnKey}
                  className={`grid-button ${answeredButtons[btnKey] ? "answered" : ""}`}
                  onClick={() => handleButtonClick(row, col)}
                  disabled={answeredButtons[btnKey]}
                >
                  {points}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <div className="score-display"><p className="score">Score: {score}</p></div>

      {showPopup && (
        <div className="overlay" onClick={handleClosePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <h2>Question</h2>
            <p>{question.question}</p>
            <div className="options-grid-popup">
              {question.options.map((opt, i) => (
                <button
                  key={i}
                  className={`option-popup ${selectedOption === i ? "selected" : ""}`}
                  onClick={() => handleOptionClick(i)}
                >
                  {opt}
                </button>
              ))}
            </div>
            <button
              className="submit-btn"
              onClick={handleSubmitAnswer}
              disabled={selectedOption === null}
            >
              Submit Answer
            </button>
            <button className="close-btn" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}