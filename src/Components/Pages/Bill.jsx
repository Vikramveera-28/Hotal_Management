import React, { useState, useEffect } from "react";
import '../../App.css';
import '../../Bootsrap/css/bootstrap.min.css';

export const Bill = ({userLoginData, game}) => {
    const userName = userLoginData[0]?.name;
    const Game = game.filter(user => user.user === userName);
    const Rate = Game.map(user => user.rate);
    var gameAmount = 0;
    for (let i = 0; i < Rate.length; i++) {
        gameAmount = gameAmount + Rate[i];
    }    
    return(
        <main className="d-flex flex-column justify-content-center align-items-center pt-5">
            <h1 className="text-danger">{userName}'s Bill Page</h1>
            <div className="row">
                {Game.map((item, index) => (
                    <div key={index} className="col-6 border">
                        <h1 className="text-secondary">{item.name}: <span className="text-danger">{item.rate}</span></h1>
                    </div>
                ))}
                <h1>Total : {gameAmount}</h1>
            </div>
        </main>
    )
}