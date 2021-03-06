import React from 'react';
import style from './ButtonForSetting.module.css';

type ButtonType = {
    onClickResetValueForCounterHandler: () => void
    valueDisableButton: boolean
}

const ButtonForSetting: React.FC<ButtonType> = (props) => {
    return (
        <div className={style.button_style}>
            <button onClick={props.onClickResetValueForCounterHandler}
                    className={style.button_style_size}
                    disabled={props.valueDisableButton}>
                set
            </button>

        </div>
    );
}

export default ButtonForSetting;