import React, {ChangeEvent, useState} from 'react';
import style from './CounterTwo.module.css'
import ButtonSetting from "./ButtonTwo/ButtonTwo";

type CounterType = {
    startValue: number
    maxValue: number
    disableSetting: boolean
    error: boolean | string
    startValueHandler: (num: number) => void
    maxValueHandler: (num: number) => void
    onClickResetValueForCounterHandler: () => void
}

const CounterTwo: React.FC<CounterType> = (props) => {


    let onChangeForMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.maxValueHandler(Number(e.currentTarget.value));
    };
    let onChangeForStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.startValueHandler(Number(e.currentTarget.value));

    };

    return (
        <>
            <div className={style.display_style}>
                <div className={style.max_value}>
                    <span>max value:</span> <input className={`${props.error ? style.error : ''} `}
                                                   type={'number'}
                                                   value={props.maxValue}
                                                   onChange={onChangeForMaxValueHandler}

                />
                </div>
                <div>
                    <span>start value:</span> <input className={`${props.error ? style.error : ''} `}
                                                     type={'number'}
                                                     value={props.startValue}
                                                     onChange={onChangeForStartValueHandler}/>
                </div>
            </div>
            <ButtonSetting valueDisableButton={props.disableSetting}
                           onClickResetValueForCounterHandler={props.onClickResetValueForCounterHandler}/>
        </>
    );
}

export default CounterTwo;