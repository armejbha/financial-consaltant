import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, img, price, description } = service;
    const navigate = useNavigate();
    const navigateToCheckOut = () => {
        navigate(`/service/${id}`);
    }

    return (
        <div className='col-sm-12 col-lg-4'>
            <Card className='shadow-sm border-primary'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='text-center fs-4'>{name}</Card.Title>
                    <Card.Text className='text-center fw-bold'>Price:<span className='fw-normal'>${price}</span></Card.Text>
                    <Card.Text className='text-align'>
                        {description}
                    </Card.Text>
                    <div className='d-flex justify-content-center align-items-center'>
                        <Button onClick={() => navigateToCheckOut(id)} variant="primary" className='text-center'>Go Checkout</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Service;