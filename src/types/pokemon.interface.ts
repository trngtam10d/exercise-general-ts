/**Interface pokemon
 * id: number, name: string
 */
export interface Pokemon {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    };
}

/**
 * Interface pokemon detail
 */
export interface PokemonByName extends Pokemon {
    abilities?: {
        ability: string;
        name: string;
    }[];
}
