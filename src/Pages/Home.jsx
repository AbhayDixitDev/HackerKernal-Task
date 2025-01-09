import React from 'react'
import AddProductForm from './AddProductForm'
import DisplayProduct from './DisplayProduct'
import Search from './Search'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("taskToken")) {
      navigate("/login");
    }
  }, [token]);
  return (
  <>
  <div style={{display:"flex",gap:"20px",justifyContent:"space-evenly",padding:"20px"}}>
  <AddProductForm/>
  <DisplayProduct/>
  <Search/>
  </div>
  </>
  )
}

export default Home