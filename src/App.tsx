import React, {useState} from 'react';
import './App.css';
import Counter from "./Component/Counter/Counter";
import SettingCounter from "./Component/CounterTwo/CounterTwo";

function App() {
    const textForCounter = `Enter value and press 'set'`;
    const [startValueForCounter, setStartValueForCounter] = useState<number | string>(textForCounter);
    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(0);
    const [error, setError] = useState<boolean | string>(false);
    const [disableSetting, setDisableSetting] = useState<boolean>(false);

    const increaseStartValue = () => {
        if (typeof startValueForCounter === "number") {
            setStartValueForCounter(startValueForCounter + 1);
        } else {
            return
        }
    }
    const resetStartValue = () => {
        setStartValueForCounter(startValue);
    }
    const maxValueHandler = (maxNum: number) => {
        if (maxNum < 0 || maxNum < startValue || maxNum === startValue) {
            setError('Incorrect value');
            setDisableSetting(true);
            setMaxValue(maxNum);
            setStartValueForCounter(textForCounter);
        } else if (maxNum >= 0 || maxNum > startValue) {
            setError(false);
            setDisableSetting(false);
            setMaxValue(maxNum);
            setStartValueForCounter(textForCounter);
        }
    }
    const startValueHandler = (startValue: number) => {
        if (startValue < 0 || startValue > maxValue || startValue === maxValue) {
            setError('Incorrect value');
            setDisableSetting(true);
            setStartValue(startValue);
            setStartValueForCounter(textForCounter);
        } else if (startValue >= 0 || startValue < maxValue) {
            setError(false);
            setDisableSetting(false);
            setStartValue(startValue);
            setStartValueForCounter(textForCounter);
        }
    }
    const onClickResetValueForCounterHandler = () => {
        setStartValueForCounter(startValue);
    }


    return (
        <div>

            <div className="Counter">
                <Counter maxValue={maxValue}
                         startValue={startValue}
                         startValueForCounter={startValueForCounter}
                         increaseStartValue={increaseStartValue}
                         resetStartValue={resetStartValue}
                         error={error}/>
            </div>
            <div className="SettingCounter">
                <SettingCounter startValue={startValue}
                                maxValue={maxValue}
                                disableSetting={disableSetting}
                                error={error}
                                startValueHandler={startValueHandler}
                                maxValueHandler={maxValueHandler}
                                onClickResetValueForCounterHandler={onClickResetValueForCounterHandler}/>

            </div>

        </div>

    );
}

export default App;
