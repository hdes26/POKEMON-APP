import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../../atoms/RadioButton/RadioButton';
import Label from '../../atoms/Label/Label';

import './style.css';

interface RadioButtonLabelProps {
    id: number;
    text: string;
}

export const RadioButtonLabel = (props: RadioButtonLabelProps) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className='radiobutton-label'>

            <Checkbox checked={isChecked} onChange={setIsChecked} key={props.id} id={props.id} />
            <Label text={props.text} />

        </div>

    );
};

RadioButtonLabel.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired

};

export default RadioButtonLabel;