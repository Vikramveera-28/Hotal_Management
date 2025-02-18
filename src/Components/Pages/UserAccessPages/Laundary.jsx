import React from "react";
import '../../../App.css';
import BedClothImage from '../../../Images/bedCloth.jpg';
import JeansImage from '../../../Images/jeans.jpg';
import PantsImage from '../../../Images/pants.jpg';
import ShirtImage from '../../../Images/shirt.jpg';
import GloesImage from '../../../Images/Gloes.png';

const Laundary = ({laundaryList, laundary, laundaryError}) => {
    const ImagesList = {
        "Shirt" : BedClothImage,
        "Pants" : JeansImage,
        "Jeans" : PantsImage,
        "Bed Cloth" : ShirtImage,
        "Gloes" : GloesImage
    }
    return(
        <main className="d-flex justify-content-center align-items-center p-3">
            <div className="container">
                <h1 className="display-5 text-center text-primary mt-5">Laundary</h1>
                <div className="row gy-5">
                    {laundary.map((item, index) => (
                        <div key={index} className="col-12">
                            <div className="card">
                                <div className={`row d-flex ${index%2===0 && 'flex-row-reverse'}`}>
                                    <div className="col-12 col-md-4 h-100">
                                        <div className="card-img h-100 d-flex justify-content-center align-items-center">
                                            <img src={ImagesList[item.cloth]} className="img-fluid" alt={item.cloth} />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-8">
                                        <div className="card-body d-flex flex-column">
                                            <h1 className="text-center text-primary w-100 my-3 border-bottom">{item.cloth}</h1>
                                            <h4 className="text-secondary">Per Quantity: <span className="text-success">1/per</span></h4>
                                            <h4 className="text-secondary">Price: <span className="text-success">Rs. {item.price}</span></h4>
                                            <button className="btn btn-warning w-100 mt-3" onClick={() => laundaryList(item.cloth, item.price)}>Clean</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {laundaryError && <div className="text-center text-danger h4 mt-5">{`${laundaryError}`}</div>}
            </div>
        </main>
    )
}
export default Laundary;