import { useState } from 'react';

const minus = '-';
const plus = '+';

const style = {
    btn: {
        padding: '.5rem 2rem',
        fontSize: '1.5rem',
        cursor: 'pointer',
        margin: '.5rem 0 3rem 1rem',
    },
    div: {
        border: 'solid .2rem #ccc',
        textAlign: 'center',
        margin: '3rem 0 5.5rem',
    },
    divCount: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10rem',
    },
    count: {
        color: 'red',
        fontSize: '3rem',
    },
    newCount: {
        color: '#090b46',
        fontSize: '3rem',
    },
}

function CountItem () {
    const [count, setCount] = useState(0);
    const [newCount, setNewCount] = useState(1);

    const onCountHandler = (val) => (e) => {
        if(plus === val) return setCount(count + 1);
        if(minus === val) return setCount(count - 1);
        return (setCount(0), setNewCount(1));
    }

    const onCountTestHandler = () => {
        console.log({newCount});
        return setNewCount(newCount * 2);
    };

    return (
        <div style={style.div}>
            <div style={style.divCount}>
                <h2 style={style.count}>{count}</h2>
                <h2 style={style.newCount}>{newCount}</h2>
            </div>
            <button onClick={onCountHandler(plus)} style={style.btn}>plus</button>
            <button onClick={onCountHandler(minus)} style={style.btn}>minus</button>
            <button onClick={onCountHandler()} style={style.btn}>reset</button>
            <button onClick={onCountTestHandler} style={style.btn}>test</button>
        </div>
    )
}

export default CountItem;