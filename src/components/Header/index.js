import React from "react";
import "./style.css";

import Logo from "../../images/logo-corebiz-global.svg"

const Header = () => {
    return (
    <header className="header">
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="Corebiz logo" />
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <a href="https://www.corebiz.ag/pt/about/" target="_blank">a corebiz</a>
                    </li>
                    <li>
                        <a href="https://www.corebiz.ag/pt/#framework-title" target="_blank">serviços</a>
                    </li>
                    <li>
                        <a href="https://www.corebiz.ag/pt/cases/" target="_blank">cases</a>
                    </li>
                    <li>
                        <a href="https://www.corebiz.ag/pt/contato/" target="_blank">contato</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    );
}

export default Header;