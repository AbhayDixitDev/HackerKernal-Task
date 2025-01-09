import React from 'react';
import { useSelector } from 'react-redux';
import { ImCross } from "react-icons/im";
import "../assets/stylesheets/Search.css";

const Search = () => {
    const searchData = useSelector(state => state.product.search);

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

    return (
        <div className="container">
            <h1>Search Products</h1>
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