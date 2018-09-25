import React, {Component} from 'react';
import {Col,Glyphicon,Row} from 'react-bootstrap';
import  './style.css';

class Service extends Component {
   
    render() { 
        return (  
            <div className="services-style text-center">
            <Row >
                <h1>OUR SERVICES</h1>
            </Row>
            <Row>
            <Col sm ={4} md={4} lg={4}>
                <span><Glyphicon glyph="ok-circle" /></span>
               <h3>Winter Driving</h3>
               
                <p>Learn how to prepare your vehicle for winter as well as how to 
                    anticipate and react to dangerous road conditions with this 
                    winter-specific defensive driving course.</p>
                </Col>
                <Col sm ={4} md={4}lg={4}>
                <span><Glyphicon glyph="ok-circle" /></span>
                <h3>Motorcycle Instruction</h3>
                <p>Our training programs will not only properly prepare you for taking the 
                    state road test but more importantly it prepares you for the real world 
                    challenge of motorcycle driving.</p>
                </Col>
                <Col sm ={4} md={4}lg={4}>
                <span><Glyphicon glyph="ok-circle" /></span>
                <h3>Teen Programs</h3>
                <p>Earning a driver’s license has long been a rite of passage for teens.
                     Fama is pleased to offer both
                     classroom instruction and behind-the-wheel driving lessons to teens.</p>
                </Col>
            </Row>
            </div>
        );
    }
}
 
export default Service;