import React, { useState, useEffect, useRef } from 'react';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Time() {
    const [time, setTime] = useState(0); // time
    const [isActive, setIsActive] = useState(false); // trạng thái start , stop và clear
    const [res , setRes ] = useState(true); // trạng thái resume
    const a = useRef(0);

    useEffect(function () {        
        if (isActive === true) {
            a.current = setInterval(function () {
                setTime(time => time + 1000)
            }, 1000);
            console.log(a.current);
        } 
        else if(isActive === false) {
            clearInterval(a.current);
            console.log(a.current);
        }
        else{
            clearInterval(a.current);
            setTime(0)
        }
    }, [isActive]);

    const handleStart = () => {
        setIsActive(true);
        
    };
    const handleStop = () => {
        setIsActive(false);
        setRes(false);
    };
    const handleClear = () => {
        setIsActive(null);
        setRes(true)
    };

    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

    const formatTime = (num) => {
        return num < 10 ? `0${num}` : num;
    }

    return (
        <>
            <h1>Stop Watch</h1>
            <div className="timer-container">
                <div className="timer-box">
                    <h1>{formatTime(hours)}</h1>
                </div>
                <span className="colon">:</span>
                <div className="timer-box">
                    <h1>{formatTime(minutes)}</h1>
                </div>
                <span className="colon">:</span>
                <div className="timer-box">
                    <h1>{formatTime(seconds)}</h1>
                </div>
            </div>
            <div className='button-container'>
                <button onClick={handleStart} className="btn btn-primary">{res ? "Start" : "Resume" }</button>
                <button onClick={handleStop} className="btn btn-danger">Stop</button>
                <button onClick={handleClear} className="btn btn-secondary">Clear</button>
            </div>
        </>
    );
}

export default Time;
