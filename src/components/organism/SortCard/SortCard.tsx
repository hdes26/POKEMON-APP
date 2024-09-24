import React from 'react';
import RadioButtonLabel from '../../molecules/RadioButtonLabel/RadioButtonLabel';
import Label from '../../atoms/Label/Label';

import './style.css';

interface SortCardProps {
    isVisible: boolean;
    onClose: () => void;
}

export const SortCard = ({ isVisible }: SortCardProps) => {

    if (!isVisible) return null;

    return (
        <div className='sort-card'>
            <div className='sort-card-content'>
                <Label text='Sort by:' />
                <div className='sort-card-radiobutton'>
                    <RadioButtonLabel text='Number' id={1} />
                    <RadioButtonLabel text='Name' id={2} />
                </div>
            </div>
        </div>
    );
};

export default SortCard;