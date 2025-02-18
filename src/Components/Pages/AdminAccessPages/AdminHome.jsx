import React from 'react'

const AdminHome = ({admin}) => {
    const adminName = admin.map(item => item.name)
  return (
    <>
    <h3 className="text-secondary border-bottom border-secondary">{adminName}</h3>
    </>
  )
}
export default AdminHome;