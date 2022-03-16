import React from "react";
import './MiniCard.css';

export const MiniCard = (item) => {
    return(
        <div className="mini-container">
            <div className="wrapper">
                <img src={item.item.images.sm} alt="character photo"/>
                <h1>{item.item.name}</h1>
                <span>{item.item.biography.publisher}</span>
                <span>{item.item.appearance.race}</span>
            </div>
        </div>

    );
};