import React from 'react'
import Topbar from './Topbar'
import StaffManagement from './StaffManagement'
import { Outlet } from 'react-router-dom'
import HomePage from './HomePage'


function Main() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
        <Topbar />
        <Outlet/>
         </div>
    </div>
  )
}

export default Main
