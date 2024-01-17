import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import { getCartTotal } from './redux/features/cartSlice'
export default function CardContainer() {
  let {items,totalAmount}=useSelector(state=>state.cart)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getCartTotal())
  })

  return (
    <div className='container mt-3'>
       {/* {JSON.stringify(items,null,4)} */}
       <div className='row'>
        <div className='col-md-8'>  {items.map((item, index) => (
          <CartItem key={index} {...item}></CartItem>
        ))}
</div>
        <div className='col-md-4'>
          <div className='card p-5'>
            <h3>checkout | Payment</h3>
            <hr/>
          <h3 text-center>Total Amount : {totalAmount}</h3>
          <button className='btn btn-success mt-3'>Payment</button>
          </div>
       
        </div>
       {/* <div className="container mt-2">
      
       
      </div> */}
      </div>
    </div>
  )
}
