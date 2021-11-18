import React, { useEffect, useState } from 'react'
import './App.css';
export default function TakeN({demo}) {
    const [n, setN] = useState(null);
    const [error,setError] = useState(null);
    useEffect(()=>{
        // null will be in first render and NaN when we will be blackslacing again and again
        if(n === null || isNaN(parseInt(n))) {
            setError(null);
            return;
        }
        if(n<=0) {
            setError("Rows must be greater than 0");
        }
        else {
            setError(null);
        }
    },[n]);
    function handleSubmit(e) {
        e.preventDefault();
        if(n <= 0 || n === null || isNaN(parseInt(n))) {
            return;
        }
        demo(n);
    }
    return (
        <div className="takeN">
            <form onSubmit={handleSubmit}>
                <input className={'inputBox' + (error?' errorInputBox': '')} type="number" placeholder="Input the number of rows" value={n} onChange={(e)=>{ setN(e.target.value)}}></input>
                <button className="buttonBox" style={{cursor: !error?'pointer':''}} type="submit" disabled={error || n === null || isNaN(parseInt(n))}>Enter the game</button>
            </form>
            {error && 
                <div>
                    {error}
                </div>
            }
        </div>
    )
}
