import React, { useState } from 'react'
import api from '../../../Api/apiUrl'
import { useNotification } from '../../../Hooks/useNotification'

const EditRestaurant = ({restaurant, fetchError}) => {
    const changePrice = async(id, food) => {
        const price = document.getElementById(`price${id}`).value
        if (price>0) {
            try {
                const Id = id;
                const Food = food;
                const Price = price;
                const newObj = {id:Id, food:Food, price:Price}
                const response = await api.put(`/restaurant/${Id}`, newObj)
                useNotification(`Successfully ${Food} price changes to ${Price}`)
            } catch (err) {
                useNotification(err.message)
            }
        } else {
            useNotification("Please enter amount more than 0..")
        }
    }
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
                    {restaurant.map((item, index)=> (
                        <tr key={index}>
                            <td className='fw-bold'>{index+1}</td>
                            <td className='fw-bold'>{item.food}</td>
                            <td className='fw-bold'>{item.price}</td>
                            <td className='d-flex gap-2'>
                                <input type="number" className='form-control' id={`price${item.id}`} placeholder='Enter the price to change' />
                                <button type="submit" className='btn btn-info' onClick={() => changePrice(item.id, item.food)}>Change</button>
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
export default EditRestaurant;