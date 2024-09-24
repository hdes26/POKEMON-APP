import React from 'react';
import './style.css';

import Nav from '../../organism/Nav/Nav';
import Search from '../../organism/Search/Search';
import PokemonList from '../../organism/PokemonList/PokemonList';




export const Home = () => {

    return (
        <div className="home">
            <Nav />
            <Search />
            <PokemonList />
        </div>
    );
}

export default Home;