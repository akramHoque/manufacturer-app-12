import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, price,  description, img, name, maxQty,  minQty } = product;
 
  return (
    <div className="card rounded-sm bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={img} alt="car parts" />
      </figure>
      <div className="card-body text-gray-700">
        <h2 className="card-title text-2xl">
        {name}
        </h2>
        <p className="text-gray-500">
        {description}
        </p>
        <div>
          <p className="font-semibold">
            Price: ${price}/<span className="text-slate-500">piece</span>
          </p>
          <p className="font-semibold py-0">
            Available: {maxQty}
            <span className="text-slate-500"> piece</span>
          </p>
          <p className="font-semibold">
            Min Order Qty: {minQty}
            <span className="text-slate-500"> piece</span>
          </p>
        </div>
        <div className="card-actions justify-center mt-2">
          <Link to={`/purchase-product/${_id}`} className="btn rounded-sm border-0 text-white bg-[#EE5A24]">
            Place Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;