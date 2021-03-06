import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import Counter from "./Component/Counter/Counter";
import SettingCounter from "./Component/SettingCounter/SettingCounter";

function App() {

    console.log('Rendering')

    const textForCounter = `Enter value and press 'set'`;
    const [startValueForCounter, setStartValueForCounter] = useState<number | string>(textForCounter);
    const [startValue, setStartValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);
    const [error, setError] = useState<boolean | string>(false);
    const [disableSetting, setDisableSetting] = useState(false);

    useEffect( ()=> {
        let maxValue = Number(localStorage.getItem('maxValue'));
        let startValue = Number(localStorage.getItem('startValue'));
        if (maxValue && startValue) {
            setMaxValue(maxValue);
            setStartValue(startValue);
        }
    }, [] );

    const increaseStartValue = () => {
        if (typeof startValueForCounter === "number") {
            setStartValueForCounter(startValueForCounter + 1);
        } else {
            return
        }
    }
    const resetStartValue = () => {
        setStartValueForCounter(startValue);
        saveToStorage();
    }
    const maxValueHandler = useCallback((maxNum: number) => {
        if (maxNum < 0 || maxNum < startValue || maxNum === startValue || startValue < 0) {
            setError('Incorrect value');
            setDisableSetting(true);
            setMaxValue(maxNum);
        } else if (maxNum > 0 || maxNum > startValue) {
            setError(false);
            setDisableSetting(false);
            setMaxValue(maxNum);
            setStartValueForCounter(textForCounter);
        }
    }, [])
    const startValueHandler = useCallback((startValue: number) => {
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
    }, [])
    const onClickResetValueForCounterHandler = () => {
        setStartValueForCounter(startValue);
    }

    const saveToStorage = ()=> {
        localStorage.setItem('maxValue', maxValue.toString());
        localStorage.setItem('startValue', startValue.toString());
    }


 //    class Animal  {
 //        name: string
 //
 //        constructor(name = 'Animal') {
 //            this.name = name;
 //        }
 //        walk() {
 //              console.log(`${this.name} WOOF!`)
 //        }
 //        eat() {
 //              console.log(`${this.name} EAT!`)
 //        }
 //        sleep() {
 //              console.log(`${this.name} SLEEPING!`)
 //        }
 //    }
 //
 //    let dog = new Animal();
 //
 //    dog.eat();
 //
 //    class Monkey extends Animal {
 //
 //        constructor(name: string = 'Monkey') {
 //            super(name);
 //        }
 //
 //        roar() {
 //            console.log(`${this.name} Roar`)
 //        }
 //
 //        climb() {
 //            console.log(`${this.name} climb`)
 //        }
 //    }
 //
 //  let monkey = new Monkey()
 //
 // monkey.climb()
 //
 //    console.log(monkey)
 //    console.log(dog)

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
