import React from "react";
import '../../../App.css';
import BiriyaniImage from '../../../Images/biriyani.jpg';
import ChickenRiceImage from '../../../Images/chickenrice.jpg';
import CoolDrinksImage from '../../../Images/cooldrinks.jpg';
import MealsImage from '../../../Images/meals.jpg';
import TandooriImage from '../../../Images/tandoori.jpg';

const Restaurant = ({restaurantList, restaurant, restaurantError}) => {
    const ImagesList = {
        "Biriyani" : BiriyaniImage,
        "Chicken Rice" : ChickenRiceImage,
        "Cool Drinks" : CoolDrinksImage,
        "Meals" : MealsImage,
        "Tandoori" : TandooriImage
    }
    return(
        <main className="d-flex justify-content-center align-items-center p-3">
            <div className="container">
                <h1 className="display-5 text-center text-primary mt-5">Restaurant</h1>
                <div className="row gy-5">
                    {restaurant.map((item, index) => (
                        <div key={index} className="col-12">
                            <div className="card">
                                <div className={`row d-flex ${index%2===0 && 'flex-row-reverse'}`}>
                                    <div className="col-12 col-md-4 h-100">
                                        <div className="card-img h-100 d-flex justify-content-center align-items-center">
                                            <img src={ImagesList[item.food]} className="img-fluid" alt={item.food} />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-8">
                                        <div className="card-body d-flex flex-column">
                                            <h1 className="text-center text-primary w-100 my-3 border-bottom">{item.food}</h1>
                                            <h4 className="text-secondary">Per Quantity: <span className="text-success">1/per</span></h4>
                                            <h4 className="text-secondary">Price: <span className="text-success">Rs. {item.price}</span></h4>
                                            <button className="btn btn-warning w-100 mt-3" onClick={() => restaurantList(item.food, item.price)}>Order</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {restaurantError && <div className="text-center text-danger h4 mt-5">{`${restaurantError}`}</div>}
            </div>
        </main>
    )
}
export default Restaurant;