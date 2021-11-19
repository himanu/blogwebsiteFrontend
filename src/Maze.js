import React, { useEffect, useState } from 'react';
import jerry from "./jerry.gif";
import butter from "./butter.png";
import './App.css';
export default function Maze({n}) {
    const [blockedCell, setBlockedCell] = useState([]);
    const [visitedCell, setVisitedCell] = useState([]);
    const [currentCell, setCurrentCell] = useState(0);
    const [executeFunc, setExecuteFunc] = useState(false);
    // const [noOfPaths, setPathCount] = useState(0);
    const [paths, setPaths] = useState([]);
    useEffect(()=>{
        setCurrentCell(0);
        setVisitedCell([]);
        setPaths([]);
        if(n === 1) {
            setBlockedCell([]);
        }
        else {
            // 
            const countOfBlockedCell = Math.floor(Math.random()*(n*n-2) + 1);
            console.log(countOfBlockedCell);
            var arr = [];
            while(arr.length < countOfBlockedCell){
                var r = Math.floor(Math.random() * n*n);
                if(arr.indexOf(r) === -1 && r !== 0 && r !== n*n - 1) arr.push(r);
            }
            setBlockedCell(arr);
        } 
    },[])
    let allPaths1 = {};
    let noOfPaths = 0;
    const dfs1 = (current, currentPath, allPaths)=>{
        console.log('current cell ', current);
        currentPath.push(current);
        if(current === n*n - 1) {
            allPaths.push(currentPath);
            allPaths1[noOfPaths] = currentPath;
            console.log("current paths ", currentPath);
            // setPaths((curr)=>  [...curr,currentPath]);
            setVisitedCell([...visitedCell,...currentPath]);
            currentPath.pop();
            noOfPaths = (noOfPaths + 1);
            return;
        }
        const dirX = [0,1,0,-1];
        const dirY = [1,0,-1,0];
        const currX = Math.floor(current/n);
        const currY = current%n;
        for(let i = 0; i<4; i++) {
            let nextX = currX + dirX[i];
            let nextY = currY + dirY[i];
            if(nextX >= 0 && nextX < n && nextY >= 0 && nextY < n) {
                let next = nextX*n + nextY;
                if(!(currentPath.includes(next)) && !(blockedCell.includes(next))) {
                    dfs1(next,currentPath,allPaths);
                }
            }
        }
        currentPath.pop();
        return;
    }
    // const dfs = (current = currentCell, visited = visitedCell)=>{
    //     // look for valid neighbour
    //     console.log("currentCell ",current);
    //     console.log(blockedCell);
    //     if(current === (n*n - 1)) {
    //         setVisitedCell({...visited});
    //         const newArr = paths;
    //         paths.push(visited);
    //         console.log('newArr ', newArr);
    //         setPaths([...paths, visited]);
    //         return;
    //     }
    //     let limit = (n*(Math.floor(current/n))) + n;
    //     if(((current + 1) < limit) && (!visited[current + 1]) && (!(blockedCell.includes(current + 1)))) {
    //         current = current + 1;
    //         console.log('1');
    //         visited[current] = true;
    //         dfs(current,visited);
    //         visited[current] = false;
    //         current = current - 1;
    //     }
    //     limit = limit - n;
    //     if((current - 1 >= limit) && (!visited[current - 1]) && (!(blockedCell.includes(current - 1)))) {
    //         current = current - 1;
    //         console.log('2');
    //         visited[current] = true;
    //         // if(dfs(current,visited)) {
    //         //     return true;
    //         // }
    //         dfs(current,visited);
    //         visited[current] = false;
    //         current = current + 1;
    //     }
    //     if((current - n >= 0) && (!visited[current - n]) && (!(blockedCell.includes(current - n)))) {
    //         current = current - n;
    //         console.log('3');
    //         visited[current] = true;
    //         // if(dfs(current,visited)) {
    //         //     return true;
    //         // }
    //         dfs(current,visited);
    //         visited[current] = false;
    //         current = current + n;
    //     }
    //     if((current + n < n*n) && (!visited[current + n]) && (!(blockedCell.includes(current + n)))) {
    //         if(blockedCell.includes(current + n)) {
    //             console.log("yes it includes ");
    //         }
    //         console.log("current + n ", current + n);
    //         current = current + n;
    //         visited[current] = true;
    //         // if(dfs(current,visited)) {
    //         //     return true;
    //         // }
    //         dfs(current,visited);
    //         visited[current] = false;
    //         current = current - n;
    //     }
        
    // }
    useEffect(()=>{
        console.log('visitedCell ',visitedCell);
    },[visitedCell])
    useEffect(()=>{
        console.log('paths ',paths);
    },[paths])
    useEffect(()=>{
        console.log("executeFunc ", executeFunc);
    })
    return (
        <div className="maze" style={{display: 'grid',gridTemplateColumns: `repeat(${n},100px)`,gridTemplateRows: `repeat(${n},100px)`, gridGap: 10}}>
            { [ ...Array(n*n) ].map((e,i) =>{  return <div className={'cell' + ((blockedCell.length && blockedCell.includes(i))?' blocked':(visitedCell.includes(i)?' visitedCell':''))} key={i}> {i===currentCell||i===n*n-1?<img style={{width: '50%'}} src={i === currentCell?jerry:butter} alt="jerry"/>:''} </div>}) }
            <button onClick={() => {const currentPath = [], allPath = [];dfs1(0,currentPath,allPath); console.log("allPaths1 ",allPaths1) }}> Start game </button>
        </div>
    )
}
