import React from 'react'
import { useSelector } from 'react-redux'

export default function Navbarr() {
  let {totalCount}= useSelector(state=>state.cart)
  totalCount=useSelector(state=>state.cart.items.length)
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Redux</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       
    <button type="button" className="btn btn-primary position-relative">
    <i className="fa-solid fa-cart-shopping"></i>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
   {totalCount}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>

       
      </ul>
      
    </div>
  </div>
</nav>

    </div>
  )
}
