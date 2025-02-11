import React, { useState } from 'react'
import './TicTactoe.css'
import cross from '../assets/cross.png'
import circle from '../assets/circle.png'

let data = ['','','','','','','','',''];
const TicTacToe = () => {
    let [count,setCount]=useState(0);
    let [lock,setLock]=useState(false);

    const toggle = (e,num)=>{
        if (lock){
            return 0;
        }
        if (count%2==0){
            e.target.innerHTML=`<img src=${cross} alt='cross'/>`;
            data[num]='X';
            setCount(++count)
        }
        else {
            e.target.innerHTML=`<img src=${circle} alt='cross'/>`;
            data[num]='O';
            setCount(++count);
        }

    }
    return (
        <>
            <div className='view'>
                <div className='container'>
                    <div className="heading">
                        <h1>Tic Tac Toe using ReactJs</h1>
                    </div>
                    <div className="board">
                        <div className="row1">
                            <div className="square" onClick={(e)=>{toggle(e,0)}}></div>
                            <div className="square" onClick={(e)=>{toggle(e,0)}}></div>
                            <div className="square" onClick={(e)=>{toggle(e,0)}}></div>
                        </div>
                        <div className="row2">
                            <div className="square" onClick={(e)=>{toggle(e,0)}}></div>
                            <div className="square" onClick={(e)=>{toggle(e,0)}}></div>
                            <div className="square" onClick={(e)=>{toggle(e,0)}}></div>
                        </div>
                        <div className="row3">
                            <div className="square" onClick={(e)=>{toggle(e,0)}}></div>
                            <div className="square" onClick={(e)=>{toggle(e,0)}}></div>
                            <div className="square" onClick={(e)=>{toggle(e,0)}}></div>
                        </div>


                    </div>
                    <button type='submit' className='reset'>Reset</button>

                </div>
            </div>
        </>
    )
}

export default TicTacToe
