import React from 'react';
import { ImCross } from "react-icons/im";
import { useSelector } from 'react-redux';
import "../assets/stylesheets/DisplayProduct.css"
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../Redux/productSlice';

const DisplayProduct = () => {
  const mydata = useSelector(state => state.product.products);
  // console.log(mydata.length);
  const dispatch = useDispatch();
  

  const ans = mydata.map((key) => {
    return (
      <tr key={key.id}> 
        <td>{key.name}</td>
        <td>{key.price}</td>
        <td>
          <a onClick={() => { dispatch(deleteProduct(key.id)) }} ><ImCross className="delete-icon" /></a>
        </td>
      </tr>
    );
  });

  return (
    <div className="container">
      <h1>Display Product</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {ans}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayProduct;