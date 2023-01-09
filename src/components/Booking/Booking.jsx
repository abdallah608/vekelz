import React from 'react'
import IMAGES from '../../imgs'
import'./Booking.css'
export default function Booking() {
  return (
    <>

    
    {/* start tittle */}
        
    <div className="tittle  ps-5 pt-3">
    <h2 >Booking</h2>
    </div>

    <div className="menu d-flex justify-content-between align-items-center ps-5 pt-3">
      <div className="sortBy">
      <button type="button" class="btn btn-outline-secondary  me-3 rounded-5 ">New 
      <i class="fa-solid fa-caret-down ps-3"></i>
      </button>
      <button type="button" class="btn btn-outline-secondary rounded-5">Toyota
      <i class="fa-solid fa-caret-down ps-3"></i> </button>
      </div>
      <div className="icon pe-5">
      <i class="fa-solid fa-shapes  me-3 bg-white  p-2 rounded-circle"></i>
      <i class=" shadowIcon fa-solid fa-sliders p-2 rounded-circle"></i>
      </div>
    </div>

    
    {/* end tittle */}
        
    
    {/* start Card*/}
        
    <div className="cards pt-5">
      <div className='container'>
        <div className="row gy-3">
          {IMAGES.map((image)=>(
            <>
            <div className="col-md-4" key={image.index}>
              
      <div className="card bg-white rounded-4"   >
  <div className="card-body">
    <div className="d-flex align-items-center justify-content-between">
      
    <h5 className="card-title pt-3">{image.tittle}</h5>
    <i class="fa-regular fa-heart"></i>
    </div>
    <h6 className="card-subtitle mb-2 text-muted pt-2">{image.subTittle}</h6>
    <p className="card-img text-center "> <img className='w-auto ' src={image.Img} alt="" /></p>
  <div className="carInfo d-flex justify-content-between align-items-center">
    <div className="info d-flex  ">
      <div className="people d-flex justify-content-center align-items-center pe-3">
      <i class="smallIcon fa-regular fa-user fs-5 pe-1 "></i>
            <h5 className='text-muted m-auto'>4</h5>
      </div>
      <div className="manual d-flex justify-content-center align-items-center">
      <i class="smallIcon fa-solid fa-code-compare fs-5 pe-1"></i>
            <h5 className='text-muted'>manual</h5>
      </div>
    </div>
    <div className="price">
      <h5>{image.Price} <span className='text-muted'>/d</span></h5>
    </div>
  </div>
  </div>
</div>

              </div>
            </>
          )
          )}
        </div>

      </div>
    </div>

    </>
  )
}
