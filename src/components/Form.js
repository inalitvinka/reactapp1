import { useState } from 'react';

function Form () {
    const [inputValues, setInputValues] = useState({name: '', surname: ''});
    const [isSend, setIsSend] = useState(false);

    const submitForm = event => {
        event.preventDefault();
        setIsSend(true);
    }

    const onChangeHandler = (event ,key) => {
        const value = event.target.value;
        setInputValues({...inputValues, [key]: value});
    }

    const foo = (event, name) => console.log(event.target, name);
    const count = 0;
    return (
        <div className="border">
            {count ? <h1>Count of messages: {count}</h1> : <h1>lol</h1>}
            <h2>React Form</h2>
            <form onSubmit={submitForm}>
                <button onClick={event => foo(event, 'Ina')} className="btnStyle">click</button>
                <input type='text' placeholder="enter your name" onChange={event => onChangeHandler(event, 'name')} value={inputValues.name} className="btnStyle" />
                <input type='text' placeholder="enter your surname" onChange={event => onChangeHandler(event, 'surname')} value={inputValues.surname} className="btnStyle" />
                <button type='submit' className="btnStyle">submit form</button>
            </form> 
            {isSend && 
                `your name is ${inputValues.name}, your surname is ${inputValues.surname}`
            }
        </div>
    )
}

export default Form;