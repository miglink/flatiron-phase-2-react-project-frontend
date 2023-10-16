import React from "react";

const Character = ({character}) => {
    const {name, films, shortfilms, tvShows, parkAttractions, allies, enemies, imageUrl} = character
    return (
        <div className="character" >
            <img src={imageUrl} alt={`Character Portrait of ${name}`} />
            <h2>{name}</h2>
            <p>{films}</p>
            <p>{shortfilms}</p>
            <p>{tvShows}</p>
            <p>{parkAttractions}</p>
            <p>{allies}</p>
            <p>{enemies}</p>
        </div>
    )
}

export default Character