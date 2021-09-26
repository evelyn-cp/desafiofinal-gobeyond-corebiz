import React from "react";
import "./style.css";
import Logo2 from "../../images/logo-corebiz-black.svg"
import facebookIcon from "../../images/FB_icon.svg"
import instagramIcon from "../../images/instagram_icon.svg"
import linkedinIcon from "../../images/LINKEDIN_icon.svg"

const Footer = () => {
    return (
    <footer className="footer">

        <div className="corebiz">
            <div className="logo-icons">
                <div className="logo-text">
                    <img className="logo-corebiz" src={Logo2}/>
                    <p className="logo-p">direitos reservados, corebiz 2021</p>
                </div>
                <div className="social-icons">
                    <ul>
                        <li>
                            <a href="https://pt-br.facebook.com/corebiz.ag/" target="_blank">
                                <img src={facebookIcon}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/corebizag/" target="_blank">
                                <img src={instagramIcon}/>
                                </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/corebiz-brasil" target="_blank">
                                <img src={linkedinIcon}/>
                                </a>
                            </li>
                    </ul>
                </div>
            </div>
            <div className="mini-menu">
                <ul>
                    <li><a href="https://www.corebiz.ag/pt/about/">a corebiz</a></li>
                    <li><a href="https://www.corebiz.ag/pt/#framework-title">serviços</a></li>
                    <li><a href="https://www.corebiz.ag/pt/cases/">cases</a></li>
                    <li><a href="https://www.corebiz.ag/pt/contato/">contato</a></li>
                </ul>
            </div>
        </div>

        <div className="countries">
            <div className="brasil">
                <h3>.Brasil</h3>
                <p>Avenida Andrômeda, 2000. Bloco 6 e 8 Alphaville SP</p>
                <p>R. Ifigenia Maria de Oliveira, 3793 Jr. Piratininga Franca SP</p>
            </div>

            <div className="argentina">
                <h3>.Argentina</h3>
                <p>Soler 5518, 3 Piso C1425BYF Palermo Hollywood CABA</p>
            </div>

            <div className="mexico">
                <h3>.Mexico</h3>
                <p>Blvd. Miguel de Cervantes Saavedra 169, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX</p>
            </div>

            <div className="chile">
                <h3>.Chile</h3>
                <p>Roberto del Río 1137, Providencia.</p>
            </div>
        </div>
    </footer>
    );
}

export default Footer;