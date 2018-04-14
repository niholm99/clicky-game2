import React from "react";
import "./BeerCard.css";

const BeerCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectBeer(props.brewery)} 
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.brewery} src={props.image} />
            </a>
        </div>
    </div>
);

export default BeerCard;