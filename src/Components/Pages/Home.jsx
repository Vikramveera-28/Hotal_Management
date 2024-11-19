import React from "react";
import '../../App.css';
import BiriyaniImage from '../../Images/biriyani.jpg';
import ChickenRiceImage from '../../Images/chickenrice.jpg';
import CoolDrinksImage from '../../Images/cooldrinks.jpg';
import MealsImage from '../../Images/meals.jpg';
import TandooriImage from '../../Images/tandoori.jpg';
import BedClothImage from '../../Images/bedCloth.jpg';
import JeansImage from '../../Images/jeans.jpg';
import PantsImage from '../../Images/pants.jpg';
import ShirtImage from '../../Images/shirt.jpg';
import GloesImage from '../../Images/Gloes.png';
import GolfImage from '../../Images/Golf.png';
import PoolBallImage from '../../Images/Poolball.jpg';
import TenniesImage from '../../Images/Tennies.jpg';
import IndoorImage from '../../Images/indoor.jpg';
import VideoImage from '../../Images/videoGame.jpg';

export const Home = ({userLoginData, game, restaurant, laundary, deleteRestaurantItem, deleteLaundaryItem, deleteGameItem}) => {
    const userName = userLoginData[0]?.name
    const userRestaurantList = restaurant.filter(item => item.user === userName)
    const userLaundaryList = laundary.filter(item => item.user === userName)
    const userGameList = game.filter(item => item.user === userName)
    return(
        <main className="container">
            <h3 className="text-secondary fw-bold border-bottom border-secondary p-2">{userName}</h3>
            <h3 className="text-dark fw-bold p-2 mt-3">Restaurant: </h3>
            <div className="table-responsive table-height">
                <table className="table table-hover table-bordered table-height">
                    <thead className="table-dark">
                        <tr>
                            <th>Sl. No</th>
                            <th>Items</th>
                            <th>Rate</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userRestaurantList.map((item, index) => (
                            <tr key={index} style={{height: '20px'}}>
                                <td>{index+1}</td>
                                <td className="d-flex justify-content-center align-items-center">{
                                    item.ritem === "Biriyani" ? <img width="60px" alt="restaurant-item" src={BiriyaniImage}/>
                                    : item.ritem === "Chicken Rice" ? <img width="60px" alt="restaurant-item" src={ChickenRiceImage}/>
                                    : item.ritem === "Meals" ? <img width="60px" alt="restaurant-item" src={MealsImage}/>
                                    : item.ritem === "Tandoori" ? <img width="60px" alt="restaurant-item" src={TandooriImage}/>
                                    : item.ritem === "Cool Drinks" ? <img width="60px" alt="restaurant-item" src={CoolDrinksImage}/>
                                    : item.ritem}
                                </td>
                                <td><span className="fw-bold">{item.rrate}</span></td>
                                <td><button className="btn btn-danger w-100" onClick={() => deleteRestaurantItem(item.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <h3 className="text-dark fw-bold p-2 mt-3">Laundary: </h3>
            <div className="table-responsive table-height">
                <table className="table table-hover table-bordered table-height">
                    <thead className="table-dark">
                        <tr>
                            <th>Sl. No</th>
                            <th>Items</th>
                            <th>Rate</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userLaundaryList.map((item, index) => (
                            <tr key={index} style={{height: '20px'}}>
                                <td>{index+1}</td>
                                <td className="d-flex justify-content-center align-items-center">{
                                    item.litem === "Shirt" ? <img width="60px" alt="laundary-item" src={ShirtImage}/>
                                    : item.litem === "Pants" ? <img width="60px" alt="laundary-item" src={PantsImage}/>
                                    : item.litem === "Jeans" ? <img width="60px" alt="laundary-item" src={JeansImage}/>
                                    : item.litem === "Bed Cloth" ? <img width="60px" alt="laundary-item" src={BedClothImage}/>
                                    : item.litem === "Gloes" ? <img width="60px" alt="laundary-item" src={GloesImage}/>
                                    : item.litem}
                                </td>
                                <td><span className="fw-bold">{item.lrate}</span></td>
                                <td><button className="btn btn-danger w-100" onClick={() => deleteLaundaryItem(item.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <h3 className="text-dark fw-bold p-2 mt-3">Games: </h3>
            <div className="table-responsive table-height">
                <table className="table table-hover table-bordered table-height">
                    <thead className="table-dark">
                        <tr>
                            <th>Sl. No</th>
                            <th>Games</th>
                            <th>Rate</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userGameList.map((item, index) => (
                            <tr key={index} style={{height: '20px'}}>
                                <td>{index+1}</td>
                                <td className="d-flex justify-content-center align-items-center">{
                                    item.gname === "Golf" ? <img width="60px" alt="games" src={GolfImage}/>
                                    : item.gname === "Tennies" ? <img width="60px" alt="games" src={TenniesImage}/>
                                    : item.gname === "Pool Ball" ? <img width="60px" alt="games" src={PoolBallImage}/>
                                    : item.gname === "Indoor Games" ? <img width="60px" alt="games" src={IndoorImage}/>
                                    : item.gname === "Video Games" ? <img width="60px" alt="games" src={VideoImage}/>
                                    : item.gname}
                                </td>
                                <td><span className="fw-bold">{item.lrate}</span></td>
                                <td><button className="btn btn-danger w-100" onClick={() => deleteGameItem(item.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}