import React from 'react'
import '../../../Bootsrap/css/bootstrap.min.css';
import api from '../../../api/apiUrl';

export const EditUser = ({user, isLoading, fetchError}) => {
  const userDelete = async (id) => {
    try {
      await api.delete(`/user/${id}`)
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <>
    <h3 className="text-secondary border-bottom border-secondary mb-5 p-2">User List</h3>
    <div className="table-responsive">
            <table className="table table-hover table-bordered">
                <thead>
                    <tr className='table-dark text-center'>
                        <th>Sl. No</th>
                        <th>Items</th>
                        <th>Password</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((item, index)=> (
                        <tr key={index}>
                            <td className='fw-bold'>{index+1}</td>
                            <td className='fw-bold'>{item.name}</td>
                            <td className='fw-bold'>{item.password}</td>
                            <td className='d-flex gap-2'><button className='btn btn-danger w-100' onClick={() => userDelete(item.id)}>Delete</button></td>
                        </tr>
                    ))}
                        {fetchError && <tr><td colspan='4' className="text-center text-danger h4">{`Error: ${fetchError}`}</td></tr>}
                </tbody>
            </table>
        </div>
    </>
  )
}