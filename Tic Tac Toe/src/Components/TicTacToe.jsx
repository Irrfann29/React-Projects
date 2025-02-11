import React from 'react'
import './TicTactoe.css'

const TicTacToe = () => {
    return (
        <>
            <div className='view'>
                <div className='container'>
                    <div className="heading">
                        <h1>Tic Tac Toe using ReactJs</h1>
                    </div>
                    <div className="board">
                        <div className="row1">
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                        </div>
                        <div className="row2">
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                        </div>
                        <div className="row3">
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                        </div>


                    </div>
                    <button type='submit' className='reset'>Reset</button>

                </div>
            </div>
        </>
    )
}

export default TicTacToe
