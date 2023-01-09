import { Progress } from 'antd'
import React from 'react'
import img11 from '../../imgs/11.png'
import img12 from '../../imgs/12.png'
import img13 from '../../imgs/13.png'
import img20 from '../../imgs/20.png'
import img30 from '../../imgs/30.png'
import './DashBoard.css'
export default function DashBoard() {


  return (
    <>

  <div className='container'>
    <div className="row gy-4 pb-5">
      
          {/* start Card*/}

    <div className="col-md-3">
      <div className=" card  rounded-4 mt-5" style={{background: '#a162f7'}} >
  <div className="card-body text-center pt-3">
  <i class="fa-solid fa-bolt mb-3 text-white bg-gradient rounded-circle p-3"></i>
  <h5 className='pb-3 text-white'>Energy</h5>
  <Progress percent={45} type='dashboard' className='pb-3' />
  
  </div>
</div>
      </div>
      
    <div className="col-md-3">
      <div className="card rounded-4 mt-5" >
  <div className="card-body text-center pt-3">
  <i class="fa-solid fa-arrows-up-down mb-3 arrowIcon p-3 rounded-circle"></i>
  <h5 className='pb-3'>Range</h5>

<Progress percent={57} type='dashboard' format={(percent) => `${percent} K`} className='pb-3' />

  </div>
</div>
      </div>
      
    <div className="col-md-3">
      <div className="card rounded-4 mt-5" >
  <div className="card-body text-center pt-3">
  <i class="fa-solid fa-droplet mb-3 dropIcon p-3 rounded-circle"></i>
    <h5 className='pb-3'>Break fluid</h5>
  <Progress percent={9} type='dashboard' className='pb-3' />
  
  </div>
</div>
      </div>
      
    <div className="col-md-3">
      <div className="card rounded-4 mt-5" >
  <div className="card-body text-center pt-3">
  <i class="fa-solid fa-meteor mb-3 meteorIcon p-3 rounded-circle"></i>
  <h5 className='pb-3'>Tire Wear</h5>
  <Progress percent={25} type='dashboard' className='pb-3' />
  
  </div>
</div>
      </div>

    {/* end Card*/}

        {/* start Statistics*/}

<div className="col-md-6">

<img className="ms-5" src={img20} alt="" />

</div>

<div className="col-md-6">
<img className='ms-3' src={img30} alt="" />

</div>

        {/* end Statistics*/}


        {/* start Cars*/}
    
      <div className="col-md-4" >
              
              <div className="card  rounded-4" style={{background: '#E1DFA4'}}   >
          <div className="card-body">
            <h5 className="card-title pt-3">
            <i class="fa-solid fa-arrows-spin pe-2"></i>
            64% Recommended
            </h5>
            <p className="card-img text-center "> <img className='w-auto ' src={img13} alt="" /></p>
            <h6 className="card-subtitle mb-2 fw-bolder pt-2"> Mini Cooper</h6>
          <div className="carInfo d-flex justify-content-between align-items-center">
            <div className="info d-flex  ">
              <div className="icons d-flex justify-content-center align-items-center pe-3 text-muted">
              <i class="fa-regular fa-user fs-5 pe-2 "></i>
            
               <h5 className='text-muted m-auto pe-2'>130K</h5>
               <i class="fa-solid fa-gear fs-5 pe-2 "></i>
              <i class="fa-solid fa-bolt fs-5 pe-2"></i>
            
            
              </div>  
            </div>
            <div className="price text-muted">
              <h5> 32$<span >/h</span></h5>
            </div>
          </div>
          </div>
        </div>
        
      </div>

      <div className="col-md-4" >
              
              <div className="card  rounded-4"  style={{background: '#E3ECF1'}} >
          <div className="card-body">
            <h5 className="card-title pt-3">
            <i class="fa-solid fa-arrows-spin pe-2"></i>
            64% Recommended
            </h5>
            <p className="card-img text-center "> <img className='w-auto ' src={img12} alt="" /></p>
            <h6 className="card-subtitle mb-2 fw-bolder pt-2"> Porsche 911 carrera</h6>
            <div className="carInfo d-flex justify-content-between align-items-center">
            <div className="info d-flex  ">
              <div className="icons d-flex justify-content-center align-items-center pe-3 text-muted">
              <i class="fa-regular fa-user fs-5 pe-2 "></i>
            
               <h5 className='text-muted m-auto pe-2'>130K</h5>
               <i class="fa-solid fa-gear fs-5 pe-2 "></i>
              <i class="fa-solid fa-bolt fs-5 pe-2"></i>
            
            
              </div>  
            </div>
            <div className="price text-muted">
              <h5> 32$<span>/h</span></h5>
            </div>
          </div>
          </div>
        </div>
        
      </div>

      <div className="col-md-4"  >
              
              <div className="card  rounded-4"   style={{background: '#F4E3E5'}} >
          <div className="card-body">
            <h5 className="card-title pt-3">
            <i class="fa-solid fa-arrows-spin pe-2"></i>
            64% Recommended
            </h5>
            <p className="card-img text-center "> <img className='w-auto ' src={img11} alt="" /></p>
            <h6 className="card-subtitle mb-2 fw-bolder pt-2"> Porsche 911 carrera</h6>
            <div className="carInfo d-flex justify-content-between align-items-center">
            <div className="info d-flex  ">
              <div className="icons d-flex justify-content-center align-items-center pe-3 text-muted">
              <i class="fa-regular fa-user fs-5 pe-2 "></i>
            
               <h5 className='text-muted m-auto pe-2'>130K</h5>
               <i class="fa-solid fa-gear fs-5 pe-2 "></i>
              <i class="fa-solid fa-bolt fs-5 pe-2"></i>
            
            
              </div>  
            </div>
            <div className="price text-muted">
              <h5> 32$<span >/h</span></h5>
            </div>
          </div>
          </div>
        </div>
        
      </div>


    </div>

  </div>


    </>
  )
}
