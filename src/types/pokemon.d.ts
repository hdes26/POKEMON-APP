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
};
