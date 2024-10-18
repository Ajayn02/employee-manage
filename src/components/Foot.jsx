import React from 'react'
import { Link } from 'react-router-dom'
import { Row , Col } from 'react-bootstrap'

function Foot() {
  
  return (
    <>
      <div className='container-fluid px-5 py-5 ' style={{color:"black",backgroundColor:"rgb(209, 207, 207)"}}>
        <Row>
          <Col md={6} sm={12} >
            <h3 style={{color:"black"}}>Employee Portal</h3>
            <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit fuga in possimus eveniet debitis impedit id veniam sed labore, magni quis repudiandae quos quidem doloribus nobis molestiae voluptatem libero nulla.</p>
          </Col>
          <Col md={2} sm={12} >
            <h3 style={{color:"black"}}>Links</h3>
            <div className='d-flex ' style={{ flexDirection: "column" }}>
              <Link to={''} className='mb-2' style={{ textDecoration: "none" }}>Home</Link>
              <Link to={''} className='mb-2' style={{ textDecoration: "none" }}>Link</Link>
              <Link to={''} className='mb-2' style={{ textDecoration: "none" }}>Link</Link>
            </div>
          </Col>
          <Col md={4} sm={12} >
            <div className='w-75'>
              <h3 style={{color:"black"}}>Feedback</h3>
              <textarea  className='form-control mb-2 shadow' placeholder='Add Your Feedback'></textarea>
              <button className='btn btn-success mt-2'>Send</button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Foot