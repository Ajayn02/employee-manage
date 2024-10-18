import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Landing() {
    return (
        <>
            <div className='container-fluid p-3  mt-5' style={{ minHeight: "90vh"  }}>
                <Row>
                    <Col md={5} sm={12} className=' d-flex justify-content-center align-items-center' style={{flexDirection:"column"}}>
                        <div>
                            <h3>Streamline your workforce, Amplify productivity</h3>
                            <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci consequatur minima alias sapiente ducimus quam omnis corrupti provident veritatis! Itaque nulla fugiat, porro ad modi ullam qui excepturi pariatur sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi corrupti voluptatibus saepe a cumque earum nihil officia consequuntur repellat reiciendis perferendis voluptatem ratione odit, eos dolorem magni voluptatum fugiat. Voluptatibus!</p>
                            <div className='d-grid'>
                                <Link to={'/home'} className='btn btn-success my-3'>Let's start</Link>
                            </div>
                        </div>
                       
                    </Col> 
                    <Col md={7} sm={12} className=' d-flex justify-content-center  align-items-center'>
                      <img style={{ width: "80%" }} src="https://ajayn02.github.io/Clone/meadia/home-illustration.svg" alt="" />
                    </Col>
                </Row>       
            </div>
        </>
    )
}

export default Landing