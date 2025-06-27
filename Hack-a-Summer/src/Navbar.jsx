
function Navbar(props){

    return(
        <>
      <nav className="navbar">
        <a href="doctype.html">
          <img className="Logo" src={"#"} alt="Placeholder" />
        </a>
        <div className="links">
          <ul>
            <li><a href="">ABOUT US</a></li>
            <li><a href="">SIGN UP</a></li>
            <li><a href="">LOG IN</a></li>
          </ul>
        </div>
      </nav>

      <section className="custom-container">
        <div className="left-side">
          <h1 className="title">Benvenuto su Quivy</h1>
          <p className="subtitle">
            Challenge your mind. <br />
            Create your game. <br />
            Conquer the board.
          </p>
          <a href="#" className="hero-btn">Try Some Games</a>
        </div>

        <div className="right-side">
          <span className="icon">🎯</span>
        </div>
      </section>
    </>
    );
}

export default Navbar