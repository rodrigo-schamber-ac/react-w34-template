import React, {useEffect, useState} from 'react';
import {Card, Col, Container, Form, Row} from 'react-bootstrap';
import moment from 'moment';
import NasaPicture from '../components/NasaPicture';
import getPicture from '../gateway/getPicture';
import DatePicker from 'react-datepicker';

export default function App() {

  const [picture, setPicture] = useState(new NasaPicture());
  const [startDate, setStartDate] = useState(new Date());
  
  function formatDate(dateToFormat){
    
    return moment(dateToFormat).format().slice(0,10)
  
  };

  function handleDateChange(date){
  
    loadPicture(date);
    setStartDate(date);
  
  };

  function loadPicture(date){
    
    getPicture(formatDate(date)).then((item) => {
      
      setPicture(item);
    
    });
  
  };
  
  useEffect(() => {
    
    loadPicture(startDate);
  
  }, []);
  
  return (
    <Container fluid>
      <Row className="justify-content-lg-center">
        <Col lg={2}>
          <Form>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label><h6>Choose a date:</h6></Form.Label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                          
                    handleDateChange(date);
                        
                  }}
                />
              </Form.Group>
            </Form.Row>
          </Form>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <Card.Title><h5>{`${picture.title}`}</h5></Card.Title>
            </Card.Header>
            <Card.Img variant="top" src={picture.url}/>
            <Card.Body>
              <Card.Text>
                {picture.explanation}
              </Card.Text>       
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};