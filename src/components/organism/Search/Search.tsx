import React from 'react';
import ImageInput from '../../molecules/ImageInput/ImageInput';
import ImageButton from '../../molecules/ImageButton/ImageButton';

import len from '../../../assets/len.svg';
import char from '../../../assets/char.svg';



import './style.css';
import { useAppDispatch } from '../../../redux/hooks';
import { active } from '../../../redux/features/modalSlice';


export const Search = () => {

    const dispatch = useAppDispatch()

    const handleOpenModal = () => {        
        dispatch(active())
    };

    return (
        <div className='search'>
            <ImageInput src={len} alt='len' width={12} height={13} />
            <div onClick={handleOpenModal}>
            <ImageButton src={char} alt='char' width={12} height={12} />
            </div>
        </div>
    );
};

export default Search;