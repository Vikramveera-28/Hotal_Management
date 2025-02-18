import React from 'react'

const EditLaundary = ({laundary, fetchError}) => {
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
                    {laundary.map((item, index)=> (
                        <tr key={index}>
                            <td className='fw-bold'>{index+1}</td>
                            <td className='fw-bold'>{item.cloth}</td>
                            <td className='fw-bold'>{item.price}</td>
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
export default EditLaundary;