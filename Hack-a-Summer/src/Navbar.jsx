import Logo from "./assets/logo-transparent2.png" ;

function Navbar(props){

    return(
        <section className="header">
            <nav>
             <a href="doctype.html"><img className="Logo" src={Logo} alt="Placeholder" /></a>
              <div className="links">
                 <ul>
                    <li><a href="doctype.html">HOME</a></li>
                    <li><a href="#games">GAME TYPES</a></li>
                    <li><a href="/dipendenza/dipendenza.html">ADDICTIONS</a></li>
                    <li><a href="">QUIZZES</a></li>
                    <li><a href="/contact/contact.html">CONTACT</a></li>
                 </ul>
                </div>
            </nav>
             <div className="text">
            <h1 className="title"  style={{fontSize: "100px"}}>Quivy</h1>
            <p className="margin" style={{ fontSize: '30px', color: '#f7c873', fontStyle: 'italic', margin: '10px 0 40px' }}>
            Challenge your mind. <br /> Create your game. <br /> Conquer the board.
            </p>

            <a href="" className="hero-btn">Try Some Games</a>
             </div>
        </section>
    );
}

export default Navbar