import React from 'react'
import '../css/DashboardCSS.css'

function Header() {
  return (
    <>
    <div className="container-fluid" style={{backgroundColor: 'white'}}>
      <nav className="navbar navbar-light justify-content-between">
        <a className="navbar-brand" >The New Yorker Cafe</a>
        <form className="form-inline">
          <input className="form-control mr-sm-3" type="search" placeholder="Search for items..." aria-label="Search" />
          <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
      </div>
      {/* <div className="row">
        <div className="navbar-nav bg-gradient-primary sidebar col-sm-3 col-6" style={{backgroundColor: 'pink'}}>
        Category
        </div>
        <div className="col-sm-9 col-6" style={{backgroundColor: '#EEEEEE'}}>
        List
        </div>
      </div> */}

    </>
  )
}

export default Header
