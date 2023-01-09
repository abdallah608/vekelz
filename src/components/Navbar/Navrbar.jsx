import React from 'react'
import IMAGES from '../../imgs/profile.png'

export default function Navrbar() {
  return (
 <>


<nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        
      </form>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            
    <i class="fa-regular fa-bell fs-4 px-4"></i>
    <img className='rounded-circle img-fluid ' src={IMAGES} alt="" />

          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

 </>
  )
}
