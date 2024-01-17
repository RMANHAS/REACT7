import React from 'react'

export default function CartItem({id,title,price,category,image}) {
  
  return (
   <>
       <div className="card mb-3" style={{maxWidth: 540}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={image} className="img-fluid rounded-start pb-3 " alt="..." style={{objectFit:'contain', width:'150px', height:'150px'}} />
    </div>
    <div className="col-md-8 justify-content-center align-items-center">
      <div className="card-body">
      <h5 className="card-title">{id}</h5>
        <h5 className="card-title">{title.toUpperCase()}</h5>
        <p className="card-text">{category}</p>
        <p className="card-text"><small className="text-body-secondary">{price}</small></p>
      </div>
    </div>
  </div>
  <button className='btn btn-danger mx-3'>remove </button>
</div>
   </>
  )
}
