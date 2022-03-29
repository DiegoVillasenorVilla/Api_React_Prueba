import React from "react";
import './MiniCard.css';

export const MiniCard = ({images,name,biography,appearance,powerstats,work}) => {
    return(
        <div className="mini-container">
            <div className="wrapper">
                <img src={images.sm} alt="character photo"/>
                <h1>{name}</h1>
                <span>{biography.publisher}</span>
                <span>{appearance.race}</span>
                {powerstats && work ? (
                    <>
                     <span>{powerstats.intelligence}</span>
                     <span>{work.occupation}</span>
                    </>
                ) : (
                    ""
                )}
            </div>
        </div>

    );
};