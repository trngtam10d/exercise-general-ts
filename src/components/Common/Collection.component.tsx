import * as React from "react";

import { Pokemon, PokemonByName } from "../../types/pokemon.interface";
import { ByName } from "../../pages/App";
import Card from "./Card.component";

interface Props {
    pokemons: PokemonByName[];
    showPokemon: ByName;
    setPokemonByName: React.Dispatch<React.SetStateAction<ByName>>;
} 

const Collection: React.FC<Props> = (props) => {
    const { pokemons, showPokemon, setPokemonByName } = props;
    const selectPokemon = (id: number) => {
        if (!showPokemon.isOpened) {
            setPokemonByName({
                id: id,
                isOpened: true
            });
        }
    };

    return (
        <>
            {pokemons.map((item) => {
                return (
                    <div className="w-[15%] mt-[2rem]" onClick={() => selectPokemon(item.id)}>
                        <Card 
                            showPokemon={showPokemon}
                            setPokemonByName={setPokemonByName}
                            key={item.id}
                            name={item.name}
                            id={item.id}
                            abilities={item.abilities}
                            image={item.sprites.front_default}
                        />
                    </div>
                );
            })}
        </>
    );
};

export default Collection;