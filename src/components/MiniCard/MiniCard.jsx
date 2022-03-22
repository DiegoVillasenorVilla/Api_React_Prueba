import React from "react";
import './MiniCard.css';

export const MiniCard = (props) => {
    return(
        <div className="mini-container">
            <div className="wrapper">
                <img src={props.item.images.sm} alt="character photo"/>
                <h1>{props.item.name}</h1>
                <span>{props.item.biography.publisher}</span>
                <span>{props.item.appearance.race}</span>
            </div>
        </div>

    );
};