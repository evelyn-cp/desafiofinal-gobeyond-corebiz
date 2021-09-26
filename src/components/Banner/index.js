import React from "react";
import "./style.css";
import Arrow from "../../images/arrow-right.svg"

const Banner = () => {
    return (
    <section className="banner">
        <div className="grid-item1">
            <div className="title-banner">
                <p> a Corebiz atua em toda jornada digital do usuário.</p>
            </div>

            <div className="button-banner">
                <a href="https://www.corebiz.ag/pt/" target="_blank">
                <button className="btn-banner">veja mais 
                <img className="img-arrow" src={Arrow}/>
                </button></a>
            </div>

            <div className="api-carrossel">

            </div>

        </div>
        <div class="grid-item2">
            2
        </div>
    </section>
    );
}

export default Banner;