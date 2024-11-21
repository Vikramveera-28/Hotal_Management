import React from "react";
import '../../../App.css';
import '../../../Bootsrap/css/bootstrap.min.css';
import BedClothImage from '../../../Images/bedCloth.jpg';
import JeansImage from '../../../Images/jeans.jpg';
import PantsImage from '../../../Images/pants.jpg';
import ShirtImage from '../../../Images/shirt.jpg';
import GloesImage from '../../../Images/Gloes.png';

export const Laundary = ({laundaryList}) => {
    const laundary = [
        {
            id: 1,
            item: "Shirt",
            image: ShirtImage,
            rate: 15
        },
        {
            id: 2,
            item: "Pants",
            image: PantsImage,
            rate: 20
        },
        {
            id: 3,
            item: "Jeans",
            image: JeansImage,
            rate: 30
        },
        {
            id: 4,
            item: "Bed Cloth",
            image: BedClothImage,
            rate: 50
        },
        {
            id: 5,
            item: "Gloes",
            image: GloesImage,
            rate: 20
        }
    ]
    return(
        <main className="d-flex justify-content-center align-items-center p-3">
            <div className="container">
                <h1 className="display-5 text-center text-primary mt-5">Laundary</h1>
                <div className="row gy-5">
                    {laundary.map((item, index) => (
                        index%2===0 ? (
                        <div key={index} className="col-12">
                            <div className="card">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="card-img">
                                            <img src={item.image} className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="card-body d-flex flex-column">
                                            <h1 className="text-center text-primary w-100 my-3 border-bottom">{item.item}</h1>
                                            <h4 className="text-secondary">Per Quantity: <span className="text-success">1/per</span></h4>
                                            <h4 className="text-secondary">Price: <span className="text-success">Rs. {item.rate}</span></h4>
                                            <button className="btn btn-warning w-100 mt-3" onClick={() => laundaryList(item.item, item.rate)}>Clear</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ) : (
                        <div key={index} className="col-12">
                            <div className="card">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="card-body d-flex flex-column">
                                            <h1 className="text-center text-primary w-100 my-3 border-bottom">{item.item}</h1>
                                            <h4 className="text-secondary">Per Quantity: <span className="text-success">1/per</span></h4>
                                            <h4 className="text-secondary">Price: <span className="text-success">Rs. {item.rate}</span></h4>
                                            <button className="btn btn-warning w-100 mt-3" onClick={() => laundaryList(item.item, item.rate)}>Clear</button>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
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
