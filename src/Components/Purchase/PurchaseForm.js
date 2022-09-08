import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import { toast } from "react-toastify";

const PurchaseForm = ({ product }) => {
  console.log(product);
  const { _id, img, name, price, maxQty, minQty, description } = product;
  const [quantity, setQuantity] = useState(0);
  const [minOrderErr, setMinOrderErr] = useState("");
  const [maxOrderErr, setMaxOrderErr] = useState("");
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading></Loading>;
  }

  const handlePurchase = (e) => {
    e.preventDefault();
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    const totalPrice = price * quantity;
    const order = {
      productId: _id,
      picture: img,
      productName: name,
      totalPrice: totalPrice,
      customerName: user.displayName,
      customerEmail: user.email,
      customerPhone: phone,
      customerAddress: address,
      orderQty: quantity,
    };
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          e.target.reset();
          toast.success("Order success");
        }
      });
  };
  const handleQuantity = (event) => {
    const quantity = event.target.value;
    if (quantity < minQty) {
      return setMinOrderErr(
        "Your Order less Than Our Minimum Order Requirement"
      );
    }
    if (quantity > maxQty) {
      return setMaxOrderErr("Your Order More Than Our Available Stock");
    }
    setQuantity(quantity);
    setMinOrderErr("");
    setMaxOrderErr("");
  };
  return (
    <div className="w-full lg:w-3/4">
      <form onSubmit={handlePurchase} className="form-control lg:mt-2">
        <div className="flex flex-col lg:flex-row gap-2">
          <input
            type="text"
            readOnly
            value={user?.displayName}
            className="input rounded-md border border-orange-600 max-w-xs w-full mt-2"
            required
          />
          <input
            type="text"
            readOnly
            value={user?.email}
            className="input rounded-md border border-orange-600 max-w-xs w-full mt-2"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-2">
          <input
            type="text"
            name="address"
            placeholder="Your Address"
            className="input rounded-md border border-orange-600 max-w-xs w-full mt-2"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="input rounded-md border border-orange-600 max-w-xs w-full mt-2"
            required
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-2">
          <input
            type="number"
            onChange={handleQuantity}
            name="quantity"
            placeholder="Your Quantity"
            className="input rounded-md border border-orange-600 max-w-xs w-full mt-2"
            required
          />

          <input
            type="submit"
            disabled={minOrderErr || maxOrderErr}
            className="btn btn-secondary text-white font-semibold rounded-md border border-orange-600  max-w-xs w-full lg:w-56 block mt-2"
            value="Order Now"
          />
        </div>
      </form>
      {minOrderErr && (
        <p className="text-error">
          Your Order less Than Our Minimum Order Requirement
        </p>
      )}
      {maxOrderErr && (
        <p className="text-error">Your Order More Than Our Stock</p>
      )}
    </div>
  );
};

export default PurchaseForm;