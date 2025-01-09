import React from 'react'
import { Col, Container } from 'react-bootstrap'
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
  <Container style={{display:"flex",flexWrap:"wrap",padding:"0px"}}  >
  <Col lg={4} md={6} sm={12}> <AddProductForm/>  </Col>
  <Col lg={4} md={6} sm={12}> <DisplayProduct/>  </Col>
  <Col lg={4} md={6} sm={12}> <Search/>   </Col>
  </Container>
  </>
  )
}

export default Home