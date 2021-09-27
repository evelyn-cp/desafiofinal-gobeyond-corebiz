import React from "react";
import "./style.css";
import Arrow from "../../images/arrow-right.svg"
import Thumbnails from "../Thumbnails";

const Banner = () => {
    return (
    <section className="banner">
        <div className="grid-item1">
            <div className="title-banner">
                <p id="title">
                    
                </p>
            </div>

            <div className="button-banner">
                <a href="https://www.corebiz.ag/pt/" target="_blank">
                <button className="btn-banner">veja mais 
                <img className="img-arrow" src={Arrow}/>
                </button></a>
            </div>

            <div className="photos">
                <Thumbnails/>
            </div>

        </div>
        <div className="grid-item2">
            <div>
                <img id="pictures"/>
            </div>
        </div>
    </section>
    );
}


export default Banner;