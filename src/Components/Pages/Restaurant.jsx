import React, { useState, useEffect } from "react";
import '../../App.css';
import '../../Bootsrap/css/bootstrap.min.css';
import BiriyaniImage from '../../Images/biriyani.jpg';
import ChickenRiceImage from '../../Images/chickenrice.jpg';
import CoolDrinksImage from '../../Images/cooldrinks.jpg';
import MealsImage from '../../Images/meals.jpg';
import TandooriImage from '../../Images/tandoori.jpg';

export const Restaurant = ({restaurantList}) => {
    const food = [
        {
            id: 1,
            item: "Biriyani",
            image: BiriyaniImage,
            rate: 150
        },
        {
            id: 2,
            item: "Chicken Rice",
            image: ChickenRiceImage,
            rate: 110
        },
        {
            id: 3,
            item: "Meals",
            image: MealsImage,
            rate: 70
        },
        {
            id: 4,
            item: "Tandoori",
            image: TandooriImage,
            rate: 160
        },
        {
            id: 5,
            item: "Cool Drinks",
            image: CoolDrinksImage,
            rate: 110
        }
    ]
    return(
        <main className="d-flex justify-content-center align-items-center p-3">
            <div className="container">
                <h1 className="display-5 text-center text-primary">Restaurant</h1>
                <div className="row gy-5">
                    {food.map((item, index) => (
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
                                            <h4 className="text-secondary">Per Quantity: <span className="text-success">1/per</span></h4>
                                            <h4 className="text-secondary">Price: <span className="text-success">Rs. {item.rate}</span></h4>
                                            <button className="btn btn-warning w-100 mt-3" onClick={() => restaurantList(item.item, item.rate)}>Play</button>
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
                                            <h4 className="text-secondary">Per Quantity: <span className="text-success">1/per</span></h4>
                                            <h4 className="text-secondary">Price: <span className="text-success">Rs. {item.rate}</span></h4>
                                            <button className="btn btn-warning w-100 mt-3" onClick={() => restaurantList(item.item, item.rate)}>Play</button>
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
