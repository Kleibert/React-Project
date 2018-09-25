import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
import  './style.css';
class Footer extends Component {
   
    render() { 
        return (  
            <div className="footer">
            <Row >
                <p>© Copyright 2018 by FAMA Driving School</p>
            </Row>
            
            </div>
        );
    }
}
 
export default Footer;