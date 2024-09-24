import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import { selectName, selectNumber } from '../../../redux/features/sortSlice'
import { active } from '../../../redux/features/modalSlice'

import { useAppDispatch, useAppSelector } from '../../../redux/hooks'

interface RadioButtonProps {
    id: number;
    checked: boolean;
    onChange: (checked: boolean) => void;
}
export const RadioButton = ({ checked, onChange, id }: RadioButtonProps) => {
    const currentSort = useAppSelector((state: any) => state.sortReducer.selectedSection);

    const dispatch = useAppDispatch()


    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const altValue = event.currentTarget.alt;

        onChange(!checked);

        if (altValue === "1") {
            dispatch(selectNumber())
            dispatch(active())
        }
        if (altValue === "2") {
            dispatch(selectName())
            dispatch(active())
        }
    };


    const isChecked = (id === 1 && currentSort === 'number') || (id === 2 && currentSort === 'name');


    return (
        <div className="custom-radio-container">
            <input
                type="radio"
                id={`custom-radio-${id}`}
                alt={`${id}`}
                name="custom-radio-group"
                className="custom-radio"
                checked={isChecked}
                onChange={handleRadioChange}
            />
            <label htmlFor={`custom-radio-${id}`} className="custom-radio-label">
                <span className="custom-radio-label-inner"></span>
            </label>
        </div>
    );
};

RadioButton.propTypes = {
    id: PropTypes.number.isRequired,
    checked: PropTypes.bool.isRequired
};

export default RadioButton;