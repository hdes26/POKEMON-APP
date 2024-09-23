import React from 'react';
import '../../styles/home.css';
import { NavBar } from '../../components/navBar';
import { SearchBar } from '../../components/searchBar';


export const Home = () => {

    return (
        <div className="home">
            <NavBar />
            <SearchBar />
        </div>
    );
}