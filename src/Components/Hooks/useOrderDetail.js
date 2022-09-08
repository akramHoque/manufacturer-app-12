import {useEffect, useState } from 'react';

const useOrderDetail = orderId => {
    const [order, setOrder] = useState({});
    useEffect(()=>{
        const url = `https://afternoon-coast-40665.herokuapp.com/equitment/${orderId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data=>setOrder(data))
    },[orderId]);
    return [order];
}
export default useOrderDetail;