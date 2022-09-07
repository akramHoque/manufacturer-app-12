import React from 'react';
import { useNavigate } from 'react-router-dom';

const Equipment = ({equipment}) => {
    const {_id, img, name,price, minQty,maxQty} = equipment;
    const navigate = useNavigate();
    const navigateToOrderDetail = id =>{
        navigate(`/order/${id}`);
    }
    return (
        <div className="card w-80  shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="" className="rounded-2xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110" />
        </figure>
        <div className="card-body text-center items-center">
          <h2 className="card-title">{name}</h2>
          <div className='text-xl'>
              <p className='text-green-400'>Price: ${price}</p>
              <p>Min Quantity: {minQty}</p>
              <p>Available Quantity: {maxQty}</p>
          </div>
          <div className="card-actions">
          <button onClick={()=>navigateToOrderDetail(_id)} className="btn btn-secondary mb-2 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 text-white">Order now</button>
          </div>
        </div>
      </div>
    );
};

export default Equipment;