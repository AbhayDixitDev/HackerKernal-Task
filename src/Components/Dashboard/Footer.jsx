import React from 'react'

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark" style={{color:"white",position:"fixed",bottom:"0",width:"100%"}}>
      <div className="container">
        <p className="text-center">Made by Abhay Dixit</p>
        <p className="text-center">
          <a href="https://github.com/abhaydixitdev" style={{color:"white", textDecoration:"none",marginRight:"10px"}}>Github</a> 
          <a href="https://www.linkedin.com/in/abhaydixitdev/" style={{color:"white", textDecoration:"none",marginRight:"10px"}}>LinkedIn</a> 
          <a href="mailto:abhaydixitdev@gmail.com" style={{color:"white", textDecoration:"none"}}>Email</a> 
        </p>
      </div>
    </footer>
  )
}

export default Footer