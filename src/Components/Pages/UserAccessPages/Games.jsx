import React, { useEffect } from "react";
import '../../../App.css';
import GolfImage from '../../../Images/Golf.png';
import PoolBallImage from '../../../Images/Poolball.jpg';
import TenniesImage from '../../../Images/Tennies.jpg';
import IndoorImage from '../../../Images/indoor.jpg';
import VideoImage from '../../../Images/videoGame.jpg';

const Games = ({gameList, games, gameError}) => {
    const ImagesList = {
        "Golf" : GolfImage,
        "Pool Ball" : PoolBallImage,
        "Tennies" : TenniesImage,
        "Indoor Games" : IndoorImage,
        "Video Games" : VideoImage
    }
    return(
        <main className="d-flex justify-content-center align-items-center p-3">
            <div className="container">
                <h1 className="display-5 text-center text-primary mt-5">Games</h1>
                <div className="row gy-5">
                    {games.map((item, index) => (
                        <div key={index} className="col-12">
                            <div className="card">
                                <div className={`row d-flex ${index%2===0 && "flex-row-reverse"}`}>
                                    <div className="col-12 col-md-4 h-100">
                                        <div className="card-img h-100 d-flex justify-content-center align-items-center">
                                            <img src={ImagesList[item.game]} className="img-fluid" alt={item.game} />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-8">
                                        <div className="card-body d-flex flex-column">
                                            <h1 className="text-center text-primary w-100 my-3 border-bottom border-2 border-secondary">{item.game}</h1>
                                            <h4 className="text-secondary">Play Timing: <span className="text-success">1hr</span></h4>
                                            <h4 className="text-secondary">Price: <span className="text-success">Rs. {item.price}</span></h4>
                                            <button className="btn btn-warning w-100 mt-3" onClick={() => gameList(item.game, item.price)}>Play</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {gameError && <div className="text-center text-danger h4 mt-5">{`${gameError}`}</div>}
            </div>
        </main>
    )
}
export default Games