import React from 'react';
import './Counter.css';

const Counter = ({ value, color, onIncrement, onDecrement }) => {
    return (
        <div className="Counter">
            <h1 style={{ color }}>{value}</h1>
            <button className="button" onClick={onIncrement}>+</button>
            <button className="button2" onClick={onDecrement}>-</button>
        </div>
    );
};

export default Counter;