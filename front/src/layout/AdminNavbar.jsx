import React from 'react'
import { Link } from 'react-router-dom'

function AdminNavbar() {
  return (
    <div>
            <Link to="/admin/adminhome">AdminHome</Link> ---
         <Link to="/admin/adminupdate">Adminupdate</Link>---
         <Link to="/">Home</Link>
    </div>
  )
}

export default AdminNavbar
