import React from 'react'
import '../../../Bootsrap/css/bootstrap.min.css';

export const EditRestaurant = ({restaurant, fetchError}) => {
    const uniqueRestaurantPrice = restaurant
    .map(item => ({ ritem: item.ritem, rrate: item.rrate })) // Map to {ritem, rrate}
    .filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.ritem === value.ritem && t.rrate === value.rrate
        ))
    );
    console.log(uniqueRestaurantPrice);
        
    
  return (
    <>
        <h3 className="text-secondary border-bottom border-secondary mb-5 p-2">Restaurand Menu List</h3>
        <div className="table-responsive">
            <table className="table table-hover table-bordered">
                <thead>
                    <tr className='table-dark text-center'>
                        <th>Sl. No</th>
                        <th>Items</th>
                        <th>Original Price</th>
                        <th>Change Price</th>
                    </tr>
                </thead>
                <tbody>
                    {uniqueRestaurantPrice.map((item, index)=> (
                        <tr>
                            <td className='fw-bold'>{index+1}</td>
                            <td className='fw-bold'>{item.ritem}</td>
                            <td className='fw-bold'>{item.rrate}</td>
                            <td className='d-flex gap-2'>
                                <input type="number" className='form-control' />
                                <button type="submit" className='btn btn-info'>Change</button>
                            </td>
                        </tr>
                    ))}
                        {fetchError && <tr><td colspan='4' className="text-center text-danger h4">{`Error: ${fetchError}`}</td></tr>}
                </tbody>
            </table>
        </div>
    </>
  )
}
