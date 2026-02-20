
import type { Character } from "../types/types"


export const CharacterCard = (params: {character?:Character}) =>{

    const character = params.character

    return(
        <div className="CharacterCard">
        <h2>Name: {character?.name}</h2>
        <h3>Birth year: {character?.birth_year}</h3>
        <h3>Gender: {character?.gender}</h3>
        <p>Height: {character?.height}</p>
        <p>Mass: {character?.mass}</p>
        <p>Hair color: {character?.hair_color}</p>
        <p>Skin color: {character?.skin_color}</p>
        <p>Eye color: {character?.eye_color}</p>
        </div>
    )
}