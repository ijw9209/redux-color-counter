import React from 'react';
import './WaitingList.css'

const WaitingItem = ({ text, entered, onEnter, onLeave }) => {
    return (
        <li>
            <div className={`text ${entered ? 'entered' : ''}`}>{text}</div>
            <div className="buttons">
                <button className="enterBtn" onClick={onEnter}>enter</button>
                <button className="leaveBtn" onClick={onLeave}>leave</button>
            </div>
        </li>
    )
}


const WaitingList = ({
    input,
    onChange,
    onSubmit,
    WaitingList,
    onEnter,
    onLeave,
}) => {
    const waitingItems = WaitingList.map(w => (
        <WaitingItem
            key={w.id}
            text={w.name}
            entered={w.entered}
            id={w.id}
            onEnter={() => onEnter(w.id)}
            onLeave={() => onLeave(w.id)}
        />
    ));
    return (
        <div className="WaitingList">
            <h2>대기자 명단</h2>
            <form onSubmit={onSubmit}>
                <input value={input} onChange={onChange} />
                <button>등록</button>
            </form>
            <ul>{waitingItems}</ul>
        </div>
    );
};

export default WaitingList;
