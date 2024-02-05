/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function Event(props) {
    const [isBooked, setIsBooked] = useState(false);
    const handleBookEvent = () => {
        props.handleBookEvent(props.id);
        setIsBooked(true);
      };
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`public/images/${props.img}`}/>
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>Price:{props.price}</Card.Text>
            
            <Card.Text>Number of tickets : {props.nbTickets}</Card.Text>
            <Card.Text>Number of Participants:  {props.nbParticipants}</Card.Text>
            <Card.Text>{props.description}</Card.Text>
            
            {isBooked ? (
          <Card.Text className="text-success">You have booked an event!</Card.Text>
        ) : (
          <Button variant="primary" onClick={handleBookEvent}>
            Book an event
          </Button>
        )}
          </Card.Body>
        </Card>
      );
    }


export default Event;