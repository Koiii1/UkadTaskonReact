import React from 'react'
import {Card} from 'react-bootstrap'


export default function AnimeItems({id,name,description,imgUrl}) {
  return (
    <div className='mb-5'>
    <Card >
            <Card.Img variant="top" src={imgUrl} height="300px" style={{ objectFit:"cover" }}></Card.Img>
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                    <span className='fs-2'>{name}</span>
                    <span className='ms-2'>{description}</span>
                </Card.Title>
            </Card.Body>
    </Card>
    </div>
  )
}
