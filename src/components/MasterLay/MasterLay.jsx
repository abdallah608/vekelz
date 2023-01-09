import React from 'react'
import { Outlet } from 'react-router-dom'
import Navrbar from '../Navbar/Navrbar'
import SliderNavbar from '../SliderNavbar/SliderNavbar'

export default function masterLay() {
  return (
    <>
    <div className='container-fluid '>
    <div className="row   ">
   <div className="col-md-1 p-0  bg-dark">
   <SliderNavbar/>
   </div>
   <div className="col-md-11   p-0 ">
    <div className="col-md-12 pb-2 px-3 ">
    <Navrbar/>
    </div>
    <div className="col-md-12  bg-light min-vh-100 ">
      <Outlet/>
    </div>
   </div>
    
    </div>
    </div>
    
    </>
  )
}
