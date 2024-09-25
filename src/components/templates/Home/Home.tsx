import React from 'react';
import './style.css';

import Nav from '../../organism/Nav/Nav';
import Search from '../../organism/Search/Search';
import PokemonList from '../../organism/PokemonList/PokemonList';

import { useAppSelector } from '../../../redux/hooks'
import SortCard from '../../organism/SortCard/SortCard';




export const Home = () => {
    const currentModal = useAppSelector((state) => state.modalReducer.active)    

    return (
        <div className="home">
            <Nav />
            <Search />
            <PokemonList />

            {currentModal && (
                <SortCard  />
            )}
        </div>
    );
}

export default Home;