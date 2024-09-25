import React from 'react';
import ImageInput from '../../molecules/ImageInput/ImageInput';
import ImageButton from '../../molecules/ImageButton/ImageButton';

import len from '../../../assets/len.svg';
import char from '../../../assets/char.svg';



import './style.css';


export const Search = () => {

    return (
        <div className='search'>
            <ImageInput src={len} alt='len' width={12} height={13} />
            <ImageButton src={char} alt='char' width={12} height={12} />
        </div>
    );
};

export default Search;