import React from 'react'
import Process1 from '../assets/Images/order-food.png'
import Process2 from '../assets/Images/valid.png'
import Process3 from '../assets/Images/pick.png'

const Delivery = () => {
  return (
    <div className="container px-4 py-5 delivery-process">
        
    <div className="row g-4 py-5 row-cols-1 row-cols-sm-2 row-cols-md-3">
      <div className="col px-5 text-center">
        <div className="mb-3">
          <img src={Process1} className='w-50 h-50' alt="" />
        </div>
        <h5>ORDER</h5>
        
      </div>
      <div className=" col px-5 text-center">
        <div className="mb-3">
          <img src={Process2} className='w-50 h-50' alt="" />
        </div>
        <h5>PAY</h5>
       
      </div>
      <div className=" col px-5 text-center">
        <div className="mb-3">
        <img src={Process3} className='w-50 h-50' alt="" />
        </div>
        <h5>PICK</h5>
         
      </div>
    </div>
  </div>
  )
}

export default Delivery