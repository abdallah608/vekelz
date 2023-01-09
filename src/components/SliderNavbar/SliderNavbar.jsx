import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../../imgs/logo.png'

export default function sliderNavbar() {
  return (
  <>
<div className="container-fluid ">
  <div className="row flex-nowrap position-fixed  ">
    <div className="col-auto  bg-dark">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <Link to='/' className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-5 d-none d-sm-inline  pt-2">
          
            <img className='p-3 rounded-4' src={logo} alt=""  style={{background: '#a162f7'}}  />
          </span>
        </Link>
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
          <li className="nav-item">
            <Link to='/'  className="nav-link align-middle px-0">
              <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <a  className="nav-link align-middle px-0">
              <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline">Assets</span>
            </a>
          </li>
          <li className="nav-item">
            <Link to='booking'  className="nav-link align-middle px-0">
              <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline">Booking</span>
            </Link>
          </li>
          <li className="nav-item">
            <a   className="nav-link align-middle px-0">
              <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline">Sell Cars</span>
            </a>
          </li>
          <li className="nav-item">
            <a   className="nav-link align-middle px-0">
              <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline">Buy Cars</span>
            </a>
          </li>
          <li className="nav-item">
            <a   className="nav-link align-middle px-0">
              <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline">Services</span>
            </a>
          </li>
          <li className="nav-item">
            <a   className="nav-link align-middle px-0">
              <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline">Calender</span>
            </a>
          </li>
          <li className="nav-item">
            <a   className="nav-link align-middle px-0">
              <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline">Messages</span>
            </a>
          </li>
          
          
        </ul>


        <ul className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start'>
        <li className="nav-item">
            <a   className="nav-link align-middle px-0">
              <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline">settings</span>
            </a>
          </li>
          
          <li className="nav-item">
            <a   className="nav-link align-middle px-0">
              <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline">logout</span>
            </a>
          </li>
          
        </ul>         
      </div>
    </div>
    
  </div>
</div>


      

  </>
  )
}
