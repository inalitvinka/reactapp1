import { useState } from "react";

// const pl = '+';
// const min = '-';

function Counter () {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState('');

    const onPlusHandler = () => setCounter(counter + 1);
    const onMinusHandler = () => setCounter(counter - 1);
    // const onCounterHandler = (val) => {
    //     console.log(val);
    //     const foo = () => {
    //         if(pl === val) return setCounter(counter + 1);
    //         if(min === val) return setCounter(counter - 1);
    //     }
    //     return foo;
        
    // }
    const onChangeHandler = () => setInputValue('LOL');

    return (
        <div className="border">
            <h2>{counter}</h2>
            <input onChange={onChangeHandler} type='text' value={inputValue} className="btnStyle" />
            <button onClick={onPlusHandler} className="btnStyle">plus</button>
            <button onClick={onMinusHandler} className="btnStyle">minus</button>
        </div>
    )
}

export default Counter;