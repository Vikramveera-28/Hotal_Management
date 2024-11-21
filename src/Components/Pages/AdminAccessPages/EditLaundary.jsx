import React from 'react'
import '../../../Bootsrap/css/bootstrap.min.css';

export const EditLaundary = ({laundary, fetchError}) => {
    const uniqueLaundaryPrice = laundary
        .map(item => ({ litem: item.litem, lrate: item.lrate })) // Map to {litem, lrate}
        .filter((value, index, self) =>
            index === self.findIndex((t) => (
                t.litem === value.litem && t.lrate === value.lrate
            ))
        );
  return (
    <>
    <h3 className="text-secondary border-bottom border-secondary mb-5 p-2">Laundary Menu List</h3>
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
                    {uniqueLaundaryPrice.map((item, index)=> (
                        <tr>
                            <td className='fw-bold'>{index+1}</td>
                            <td className='fw-bold'>{item.litem}</td>
                            <td className='fw-bold'>{item.lrate}</td>
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
