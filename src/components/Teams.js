import React from "react";
import { Card } from "react-bootstrap";

function Teams({name, img, short}) {
    return  (

      
      <Card style={{ width: '18rem'} ,{margin: '15px'}}>
    <Card.Img variant="top" src={img} />
    <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     <p>ShortName: {short}</p>
    </Card.Text>
    
  </Card.Body>
  
    </Card>
   
    )
}

export default Teams