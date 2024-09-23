import React from 'react';
import len from '../assets/len.svg'
import char from '../assets/char.svg'


export const SearchBar = () => {


    return (
        <div className='searchbar'>
            <div className='bar'>
                <img src={len} alt="len" className='len' />
                <input type="text" placeholder='Search' />
            </div>
            <button>   
                 <img src={char} alt="char" className='char' />
            </button>
        </div>
    );
};