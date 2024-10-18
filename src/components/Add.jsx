import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { addEmployee } from '../Allapi/api';



function Add({depend}) {
    const [show, setShow] = useState(false);
    const [user,setUser]=useState({
        firstname:"",lastname:"",age:"",qualification:"",email:""
    })

    const handleAdd=async()=>{
        const {firstname,lastname,age,qualification,email}=user
        if(!firstname || !lastname || !age || !qualification || !email){
            toast.error("Enter Valid Data")
        }else{
            const res= await addEmployee(user)
            // console.log(res);
            if(res.status==200){
                toast.success("Employee Added")
                depend(res)
                handleClose()
                setUser({ firstname:"",lastname:"",age:"",qualification:"",email:""})
            }else{
                toast.error("Something Went Wrong")
            }
            
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='container-fluid py-5 ps-3' >
                <button onClick={handleShow} className='btn btn-info   '>Add Employee +</button>
            </div>

            {/* modal */}

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
                <Modal.Header closeButton>
                    <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <FloatingLabel controlId="firstname" label="First Name" className='mb-3'>
                        <Form.Control type="text" placeholder="" onChange={(e)=>{setUser({...user,firstname:e.target.value})}} />
                    </FloatingLabel>
                    <FloatingLabel controlId="lastname" label="Last Name" className='mb-3'>
                        <Form.Control type="text" placeholder="" onChange={(e)=>{setUser({...user,lastname:e.target.value})}}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="age" label="Age" className='mb-3'>
                        <Form.Control type="number" placeholder="" onChange={(e)=>{setUser({...user,age:e.target.value})}}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="qualification" label="Qualification" className='mb-3'>
                        <Form.Control type="text" placeholder="" onChange={(e)=>{setUser({...user,qualification:e.target.value})}} />
                    </FloatingLabel>
                    <FloatingLabel controlId="email" label="Email" className='mb-3'>
                        <Form.Control type="email" placeholder="" onChange={(e)=>{setUser({...user,email:e.target.value})}}/>
                    </FloatingLabel>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAdd}>Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add