import type { characterList} from "../types/types";
import { CharacterCard } from "./CharacterCard";


export const CharacterList = (params: {charList: characterList}) => {

    const charList = params.charList

    return(
        <div className="CharacterList">
            
            {charList.map((ch) => (

                <CharacterCard key={ch.name} character={ch} />
            ))
            
            }
        </div>
    );
}