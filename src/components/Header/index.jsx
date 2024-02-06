import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import "./style.css"; 

export default function Header() {
    const menuRef = useRef(); 

    const toggleMenu = () => {
        menuRef.current.classList.toggle("active"); 
    }

    return (        
        <header className="header">
            <nav className="nav">
                <div className="nav-logo">LOGO</div>

                <ul className="nav-list ease" ref={menuRef}>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Como reservar</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Sobre nós</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Informações</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Contato</a>
                    </li>
                </ul>

                <div className="icons" onClick={toggleMenu}>
                    <FaBars />
                </div>
            </nav>
        </header>
    )
}