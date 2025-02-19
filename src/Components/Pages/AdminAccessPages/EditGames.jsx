import React from 'react'
import api from '../../../Api/apiUrl'
import { useNotification } from '../../../Hooks/useNotification'

const EditGames = ({game, fetchError}) => {
    const changePrice = async(id, game) => {
        const price = document.getElementById(`price${id}`).value
        if (price>0) {
            try {
                const Id = id;
                const Game = game;
                const Price = price;
                const newObj = {id:Id, game:Game, price:Price}
                const response = await api.put(`/game/${Id}`, newObj)
                useNotification(`Successfully ${Game} price changes to ${Price}`)
            } catch (err) {
                useNotification(err.message)
            }
        } else {
            useNotification("Please enter amount more than 0..")
        }
    }
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
                    {game.map((item, index)=> (
                        <tr key={index}>
                            <td className='fw-bold'>{index+1}</td>
                            <td className='fw-bold'>{item.game}</td>
                            <td className='fw-bold'>{item.price}</td>
                            <td className='d-flex gap-2'>
                                <input type="number" className='form-control' id={`price${item.id}`} />
                                <button type="submit" className='btn btn-info' onClick={() => changePrice(item.id, item.game)}>Change</button>
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
export default EditGames;