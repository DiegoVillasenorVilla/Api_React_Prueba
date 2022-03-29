import React from "react";
import { useLocation } from "react-router-dom";
import { MiniCard } from "../../components/MiniCard/MiniCard";
import { Navbar } from "../../components/Navbar/Navbar";

export const User = () => {
    
    const location = useLocation();
    console.log(location.state);

    const {images,name,biography,appearance,powerstats,work} = location.state;

    return(
        <div>
          <Navbar/>
           <h1>SuperHeroe/Villain</h1>
           <MiniCard
             images={images.sm}
             name={name}
             biography={biography.publisher}
             appearance={appearance.race}
             powerstats={powerstats.intelligence}
             work={work.occupation}

           />

        </div>
    );

     
};