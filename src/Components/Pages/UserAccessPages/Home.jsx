import React from "react";
import '../../../App.css';
import BiriyaniImage from '../../../Images/biriyani.jpg';
import ChickenRiceImage from '../../../Images/chickenrice.jpg';
import CoolDrinksImage from '../../../Images/cooldrinks.jpg';
import MealsImage from '../../../Images/meals.jpg';
import TandooriImage from '../../../Images/tandoori.jpg';
import BedClothImage from '../../../Images/bedCloth.jpg';
import JeansImage from '../../../Images/jeans.jpg';
import PantsImage from '../../../Images/pants.jpg';
import ShirtImage from '../../../Images/shirt.jpg';
import GloesImage from '../../../Images/Gloes.png';
import GolfImage from '../../../Images/Golf.png';
import PoolBallImage from '../../../Images/Poolball.jpg';
import TenniesImage from '../../../Images/Tennies.jpg';
import IndoorImage from '../../../Images/indoor.jpg';
import VideoImage from '../../../Images/videoGame.jpg';

const Home = ({ userLoggedData, games, restaurant, laundary, deleteRestaurantItem, deleteLaundaryItem, deleteGameItem, userLoggedError, loadingUserLogged }) => {
    const userName = userLoggedData[0]?.userName;
    const userRestaurantList = restaurant.filter(item => item.user === userName);
    const userLaundaryList = laundary.filter(item => item.user === userName);
    const userGameList = games.filter(item => item.user === userName);

    const getImageForItem = (category, item) => {
        switch (category) {
            case 'restaurant':
                return item === "Biriyani" ? BiriyaniImage
                    : item === "Chicken Rice" ? ChickenRiceImage
                    : item === "Meals" ? MealsImage
                    : item === "Tandoori" ? TandooriImage
                    : item === "Cool Drinks" ? CoolDrinksImage
                    : null;
            case 'laundry':
                return item === "Shirt" ? ShirtImage
                    : item === "Pants" ? PantsImage
                    : item === "Jeans" ? JeansImage
                    : item === "Bed Cloth" ? BedClothImage
                    : item === "Gloes" ? GloesImage
                    : null;
            case 'games':
                return item === "Golf" ? GolfImage
                    : item === "Tennies" ? TenniesImage
                    : item === "Pool Ball" ? PoolBallImage
                    : item === "Indoor Games" ? IndoorImage
                    : item === "Video Games" ? VideoImage
                    : null;
            default:
                return null;
        }
    };

    return (
        <main className="container">
            {
                !loadingUserLogged && 
                <>
                    <h3 className="text-secondary fw-bold border-bottom border-secondary p-2 mt-5">{userName}'s Home Page</h3>
                    {/* Restaurant Table */}
                    <h3 className="text-dark fw-bold p-2 mt-3">Restaurant: </h3>
                    <div className="table-responsive table-height">
                        <table className="table table-hover table-bordered table-height">
                            <thead className="table-dark">
                                <tr>
                                    <th>Sl. No</th>
                                    <th>Foods</th>
                                    <th>Image</th>
                                    <th>Amount</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userRestaurantList.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.food}</td>
                                        <td className="d-flex justify-content-center align-items-center">
                                            <img width="60px" alt="restaurant-item" src={getImageForItem('restaurant', item.food)} />
                                        </td>
                                        <td><span className="fw-bold">{item.amount}</span></td>
                                        <td><button className="btn btn-danger w-100" onClick={() => deleteRestaurantItem(item.id, item.food)}>Delete</button></td>
                                    </tr>
                                ))}
                                {userLoggedError && <tr><td colSpan="5" className="text-center text-danger h4">{`${userLoggedError}`}</td></tr>}
                            </tbody>
                        </table>
                    </div>

                    {/* Laundry Table */}
                    <h3 className="text-dark fw-bold p-2 mt-3">Laundry: </h3>
                    <div className="table-responsive table-height">
                        <table className="table table-hover table-bordered table-height">
                            <thead className="table-dark">
                                <tr>
                                    <th>Sl. No</th>
                                    <th>Cloths</th>
                                    <th>Image</th>
                                    <th>Amount</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userLaundaryList.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.cloth}</td>
                                        <td className="d-flex justify-content-center align-items-center">
                                            <img width="60px" alt="laundry-item" src={getImageForItem('laundry', item.cloth)} />
                                        </td>
                                        <td><span className="fw-bold">{item.amount}</span></td>
                                        <td><button className="btn btn-danger w-100" onClick={() => deleteLaundaryItem(item.id, item.cloth)}>Delete</button></td>
                                    </tr>
                                ))}
                                {/* {gameError && <tr><td colSpan="5" className="text-center text-danger h4">{`Error: ${gameError}`}</td></tr>} */}
                            </tbody>
                        </table>
                    </div>

                    {/* Games Table */}
                    <h3 className="text-dark fw-bold p-2 mt-3">Games: </h3>
                    <div className="table-responsive table-height">
                        <table className="table table-hover table-bordered table-height">
                            <thead className="table-dark">
                                <tr>
                                    <th>Sl. No</th>
                                    <th>Games</th>
                                    <th>Image</th>
                                    <th>Amount</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userGameList.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.game}</td>
                                        <td className="d-flex justify-content-center align-items-center">
                                            <img width="60px" alt="games" src={getImageForItem('games', item.game)} />
                                        </td>
                                        <td><span className="fw-bold">{item.amount}</span></td>
                                        <td><button className="btn btn-danger w-100" onClick={() => deleteGameItem(item.id, item.game)}>Delete</button></td>
                                    </tr>
                                ))}
                                {/* {gameError && <tr><td colSpan="5" className="text-center text-danger h4">{`Error: ${gameError}`}</td></tr>} */}
                            </tbody>
                        </table>
                    </div>
                </>
            }
        </main>
    );
};

export default Home;
