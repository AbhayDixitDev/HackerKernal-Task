import React from 'react';
import { useSelector } from 'react-redux';
import { ImCross } from "react-icons/im";
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import "../assets/stylesheets/Search.css";
import { useDispatch } from 'react-redux';
import { searchProduct } from '../Redux/productSlice';

const Search = () => {
    const searchData = useSelector(state => state.product.search);
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()  

    const ans = searchData.map((key) => {
        return (
            <tr key={key.id}> 
                <td>{key.name}</td>
                <td>{key.price}</td>
                <td>
                    <ImCross className="delete-icon" />
                </td>
            </tr>
        );
    });

    const handleSearch=(e)=>{
        setSearch(e)
          dispatch(searchProduct(e))
      }

    return (
        <div className="container3" >
            <h1>Search Products</h1>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e)=>{handleSearch(e.target.value)}}
              style={{width:"80%",margin:"20px"}}
            />
            {searchData.length > 0 ? (
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
            ) : (
                <h3 className="no-data">No data found</h3>
            )}
        </div>
    );
}

export default Search;