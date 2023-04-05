import '../../styles/nav.css'
import Logo from "./logo";

function navBar() {
    return (
        <div className='main-container'>
            <div className="c-container--nav">
                <Logo />
                <ul className="ul-navigation">
                    <li className="l-container--text">
                        <a href="/" className="l-text--navbar">Inicio</a>
                    </li>
                    <li className="l-container--text">
                        <a href="/" className="l-text--navbar">Series</a>
                    </li>
                    <li className="l-container--text">
                        <a href="/" className="l-text--navbar">Películas</a>
                    </li>
                    <li className="l-container--text">
                        <a href="/" className="l-text--navbar">Novedades populares</a>
                    </li>
                    <li className="l-container--text">
                        <a href="/" className="l-text--navbar">Mi lista</a>
                    </li>
                    <li className="l-container--text">
                        <a href="/" className="l-text--navbar">Explora por idiomas</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default navBar;