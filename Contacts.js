import React, {Fragment, useEffect, useState} from 'react'
import axios from 'axios'
import {Col, Row} from 'react-bootstrap'
import UserList from './UserList';
function Contacts() {
    useEffect(() => {      
        getContacts();
    }, [])

    
    const [contacts, setContacts]= useState([])
    const [loading, setLoading]= useState(false)

    const getContacts = async()=>{
        try{
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            setContacts(res.data)
            setLoading(true)

        }
        catch(err){
            alert(err.messege)

        }
    }

    return (
        <Fragment>
            <Row>
                {loading && contacts.map((el)=> (
                <Col sm={12} md={6} lg={4} key={el.id}>
                    <UserList el={el}/>
                </Col>
                ))}
            </Row>
        </Fragment>
    )
}

export default Contacts
