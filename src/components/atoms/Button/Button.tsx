import React from 'react';
import './style.css';

interface ButtonProps {
    text: string;
}
export const Button = (props: ButtonProps) => {
    return (
        <button className="button">{props.text}</button>
    );
};

export default Button;