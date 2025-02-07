import React, { useState } from 'react'
import './Header.css'

const Header = () => {
    // toggle menu
    const[Toggle, showMenu]= useState(false)
    
  return (

    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav_logo">
                A.Onipogui
            </a>
            <div className={Toggle? "nav_menu show-menu" : "nav_menu"}>

                <ul className="nav_list grid">
                    <li className="nav_item">
                        <a href="#home" className="nav_link active_link">
                            <i
                                className="uil uil-estate nav_icon"
                            ></i> Home
                        </a>
                    </li>

                    {/* <li className="nav_item">
                        <a href="#about" className="nav_link">
                            <i
                                className="uil uil-user nav_icon"
                            ></i> About
                        </a>
                    </li> */}
                    
                    <li className="nav_item">
                        <a href="#skills" className="nav_link">
                            <i
                                className="uil uil-file-alt nav_icon"
                            ></i> Skills
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#services" className="nav_link">
                            <i
                                className="uil uil-briefcase-alt nav_icon"
                            ></i>
                            Services
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#portfolio" className="nav_link">
                            <i
                                className="uil uil-scenery nav_icon"
                            ></i>
                            Portfolio
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="mailto:a.onipogui@interface3.be?subject=Demande%20de%20contact&body=Bonjour%20!" className="nav_link">
                            <i
                                className="uil uil-message nav_icon"
                            ></i>
                            Contact
                        </a>
                    </li>
                </ul>
                <i
                                className={Toggle ? "uil uil-times nav_close" : "uil uil-times nav_close btn-show"} onClick={()=> showMenu(!Toggle)}
                            ></i>
            </div>
            <div className={Toggle ? "nav_toggle btn-show" : "nav_toggle "} onClick={()=> showMenu(!Toggle)}>
            <i
                            className="uil uil-apps"
                            ></i>
            </div>
        </nav>
        
    </header>

  );
}

export default Header