import React, {ChangeEvent} from 'react';
import style from './SettingCounter.module.css'
import ButtonSetting from "./ButtonForSetting/ButtonForSetting";

type CounterType = {
    startValue: number
    maxValue: number
    disableSetting: boolean
    error: boolean | string
    startValueHandler: (num: number) => void
    maxValueHandler: (num: number) => void
    onClickResetValueForCounterHandler: () => void
}

const SettingCounter: React.FC<CounterType> = (props) => {


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

export default SettingCounter;