import React from 'react';
import Button from "../ButttonComponent/ButtonComponent";
import style from './Counter.module.css'

type CounterType = {
    startValueForCounter: number | string
    startValue: number
    maxValue: number
    error: boolean | string
    increaseStartValue: () => void
    resetStartValue: () => void
}

const Counter: React.FC<CounterType> = (props) => {
    return (
        <div>
            <div className={`${style.display_style} ${props.error || props.startValueForCounter === props.maxValue ? style.error_stop :''}`}>
                {!props.error && props.startValueForCounter}
                {props.error && props.error}
            </div>
            <Button
                increaseStartValue={props.increaseStartValue}
                maxValue={props.maxValue}
                startValueForCounter={props.startValueForCounter}
                resetStartValue={props.resetStartValue}
                startValue={props.startValue}/>
        </div>
    );
}

export default Counter;