import React, { useState, useEffect } from "react";
import '../../App.css';
import '../../Bootsrap/css/bootstrap.min.css';
import GolfImage from '../../Images/Golf.png';
import PoolBallImage from '../../Images/Poolball.jpg';
import TenniesImage from '../../Images/Tennies.jpg';
import IndoorImage from '../../Images/indoor.jpg';
import VideoImage from '../../Images/videoGame.jpg';

export const Games = ({gameList}) => {
    const games = [
        {
            id: 1,
            item: "Golf",
            image: GolfImage,
            rate: 500
        },
        {
            id: 2,
            item: "Tennies",
            image: TenniesImage,
            rate: 200
        },
        {
            id: 3,
            item: "Pool Ball",
            image: PoolBallImage,
            rate: 300
        },
        {
            id: 4,
            item: "Indoor Games",
            image: IndoorImage,
            rate: 250
        },
        {
            id: 5,
            item: "Video Games",
            image: VideoImage,
            rate: 150
        }
    ]
    return(
        <main className="d-flex justify-content-center align-items-center p-3">
            <div className="container">
                <h1 className="display-5 text-center text-primary">Games</h1>
                <div className="row gy-5">
                    {games.map((item, index) => (
                        index%2===0 ? (
                        <div key={index} className="col-12">
                            <div className="card">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="card-img">
                                            <img src={item.image} className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="card-body d-flex flex-column">
                                            <h1 className="text-center text-primary w-100 my-3 border-bottom">{item.item}</h1>
                                            <h4 className="text-secondary">Play Timing: <span className="text-success">1hr</span></h4>
                                            <h4 className="text-secondary">Price: <span className="text-success">Rs. {item.rate}</span></h4>
                                            <button className="btn btn-warning w-100 mt-3" onClick={() => gameList(item.item, item.rate)}>Play</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ) : (
                        <div key={index} className="col-12">
                            <div className="card">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="card-body d-flex flex-column">
                                            <h1 className="text-center text-primary w-100 my-3 border-bottom">{item.item}</h1>
                                            <h4 className="text-secondary">Play Timing: <span className="text-success">1hr</span></h4>
                                            <h4 className="text-secondary">Price: <span className="text-success">Rs. {item.rate}</span></h4>
                                            <button className="btn btn-warning w-100 mt-3" onClick={() => gameList(item.item, item.rate)}>Play</button>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="card-img">
                                            <img src={item.image} className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    ))}
                </div>
            </div>
        </main>
    )
}