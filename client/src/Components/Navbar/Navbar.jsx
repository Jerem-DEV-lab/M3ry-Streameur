import React, {useState} from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import {MenuItems, SocialNetworks} from "./MenuItems";
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return <>
        <div className={`overlay-navbar ${menuOpen ? "overlay-active" : "nav-disable"}`}
             onClick={toggleMenu}/>
        <div className="nav-container">
            <div className="nav-logo">
                <Link to="/">
                    <img src="/assets/navbar/Logo.png" alt="logo"/>
                </Link>
            </div>
            <div className="nav-charms">
                <Link to="/aide/charms">
                    <img src="/assets/navbar/charms.png" alt="emblème déblocable dans le jeu Raimbow Six Siège"
                         title="Obtiens dès maintenant ton charms"/>
                </Link>
            </div>
            <button className={`btn-humberger ${menuOpen ? "btn-humberger_active" : ""}`}
                    onClick={toggleMenu}>
                {!menuOpen ? <FaBars size={30}/> : <FaTimes size={30}/>}
            </button>
            <div className={`nav-primary ${menuOpen ? "nav-open" : ""}`}>
                <nav>
                    <div className="nav-open_logo">
                        <img src="/assets/navbar/Logo.png" alt="logo officiel de the_m3ry" height="150" width="150"/>

                    </div>
                    <ul className="nav-list">
                        {MenuItems.map((link) => <>
                            <li key={link.label}>
                                <NavLink to={link.url} activeClassName="active" className="nav-item" onClick={toggleMenu}>{link.icons}&nbsp;{link.label}</NavLink>
                            </li>
                        </>)}
                    </ul>
                </nav>

                <div className="nav-footer">
                    <h3>Retrouvez moi sur mes réseaux</h3>
                    <ul>
                        {SocialNetworks.map(socialLink => <>
                            <li key={socialLink.label} className="social-network-item">
                                <a href={socialLink.url} target="_blank" rel="noopener noreferer">
                                    <img src={`/assets/icons/${socialLink.icons}`} alt={socialLink.label}/>
                                </a>
                            </li>
                        </>)}
                    </ul>
                </div>

            </div>
        </div>
    </>
};

export default Navbar;
