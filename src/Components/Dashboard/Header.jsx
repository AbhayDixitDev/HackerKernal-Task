import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { searchProduct } from "../../Redux/productSlice"
import { useState } from 'react';

const Header = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()  
 
    const handleLogout=()=>{
        window.localStorage.clear("taskToken")
        navigate("/login")        
    }

    const handleSearch=(e)=>{
      setSearch(e)
        dispatch(searchProduct(e))
    }
    
  return (
    <div>
 <Navbar expand="lg" bg="dark" data-bs-theme="dark"  >
      <Container fluid style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
       
        <Navbar.Toggle aria-controls="navbarScroll" />
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
     
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e)=>{handleSearch(e.target.value)}}
              
            />
            <Button variant="danger" onClick={handleLogout} style={{width:"80px",height:"38px",fontSize:"15px"}}>Logout</Button>

          </Form>
      </Container>
    </Navbar>
        
    </div>
  )
}

export default Header