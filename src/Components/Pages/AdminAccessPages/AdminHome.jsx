import React from 'react'
import '../../../Bootsrap/css/bootstrap.min.css';

export const AdminHome = ({admin}) => {
    const adminName = admin.map(item => item.name)
  return (
    <>
    <h3 className="text-secondary border-bottom border-secondary">{adminName}</h3>
    </>
  )
}
