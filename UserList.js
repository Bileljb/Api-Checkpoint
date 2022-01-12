import React from 'react'
import {Button, Card} from 'react-bootstrap'
import {Navigate} from 'react-router-dom'
function UserList({el}) {
    return (
        <>
            <Card className='my-3 p-3 rounded h90'>
            <Card.Body>
                <Card.Title>
                <h1 >{el.name}</h1>
                </Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                    <h2>UserName: {el.username}</h2>
                </Card.Subtitle>
                <Button style={{borderRadius:'20px'}} className='w-100' variant='primary'>
                    More Details
                </Button>
            </Card.Body>
            </Card>
        </>
    )
}

export default UserList
