import React from 'react'
import '../../../Bootsrap/css/bootstrap.min.css';

export const EditGames = ({game, fetchError}) => {
    const uniqueGamePrice = game
        .map(item => ({ gname: item.gname, grate: item.grate })) // Map to {gname, grate}
        .filter((value, index, self) =>
            index === self.findIndex((t) => (
                t.gname === value.gname && t.grate === value.grate
            ))
        );
  return (
    <>
    <h3 className="text-secondary border-bottom border-secondary mb-5 p-2">Games Menu List</h3>
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
                    {uniqueGamePrice.map((item, index)=> (
                        <tr>
                            <td className='fw-bold'>{index+1}</td>
                            <td className='fw-bold'>{item.gname}</td>
                            <td className='fw-bold'>{item.grate}</td>
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
