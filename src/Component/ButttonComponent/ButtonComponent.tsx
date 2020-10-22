import React from 'react';
import style from './ButtonComponent.module.css';

type ButtonType = {
    enlargeCounter: () => void
    resetCounter: () => void
    number: number
}

const Button: React.FC<ButtonType> = (props) => {
    return (
        <div className={style.button_style}>
        <button onClick={ props.enlargeCounter } className={style.button_style_size}
                disabled={props.number === 5 ? true : false}>inc</button>
        <button onClick={props.resetCounter}  className={style.button_style_size}
                disabled={ props.number < 1 ? true : false}>reset</button>
        </div>
    );
}

export default Button;