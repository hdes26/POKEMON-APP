export type Pokemon = {
    id: string;
    name: string;
    pokemon_v2_pokemonsprites: Array<{
        sprites: {
            other: {
                home: {
                    front_default: string;
                };
            };
        };
    }>;
    pokemon_v2_pokemontypes: Array<{
        pokemon_v2_type: {
            name: string
        };
    }>;
};

export type PokemonTypes =
    | 'grass'
    | 'fire'
    | 'water'
    | 'bug'
    | 'normal'
    | 'electric'
    | 'psychic'
    | 'ghost'

