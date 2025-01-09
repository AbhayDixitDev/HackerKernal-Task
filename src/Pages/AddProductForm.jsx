import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../Redux/productSlice';
import "../assets/stylesheets/AddProductForm.css";

const AddProductForm = () => {
  const mydata = useSelector(state => state.product.products);
  console.log(mydata.length);

  const [input, setInput] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    dispatch(addProduct({ ...input, id: Date.now() }));
  };

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({ ...values, [name]: value }));
    console.log(input);
  };

  return (
    <div className="container">
      <h1>Add Product</h1>
      <Form className="form">
        <Form.Control
          type="text"
          placeholder="Enter Product Name"
          name='name'
          value={input.name} 
          onChange={handleInput}
          className="form-control"
        />
        <Form.Control
          type="number"
          placeholder="Enter Price"
          name='price'
          value={input.price} 
          onChange={handleInput}
          className="form-control"
        />
        <Button variant="success" onClick={handleSubmit} className="button">
          Add Product
        </Button>
      </Form>
    </div>
  );
};

export default AddProductForm;