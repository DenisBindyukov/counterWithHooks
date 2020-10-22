import React from 'react';
import Button from "../ButttonComponent/ButtonComponent";
import style from './Counter.module.css'

type CounterType = {
    number: number
    enlargeCounter: () => void
    resetCounter: () => void
}

const Counter: React.FC<CounterType> = (props) => {
    return (
        <div>
            <div className={ `${style.display_style} ${props.number === 5 ? style.stop : ''}`}>
                {props.number}
            </div>
            <Button enlargeCounter={props.enlargeCounter}
                    resetCounter={props.resetCounter}
                     number={props.number}/>
        </div>
    );
}

export default Counter;