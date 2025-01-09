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
  <Container fluid className="d-flex flex-wrap "  >
  <Col lg={4} md={6} sm={12}> <AddProductForm/>  </Col>
  <Col lg={4} md={6} sm={12}> <DisplayProduct/>  </Col>
  <Col lg={4} md={6} sm={12}> <Search/>   </Col>
  </Container>
  </>
  )
}

export default Home