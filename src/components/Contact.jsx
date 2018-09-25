import React,{ Component }  from 'react';
import {Col,Button,Grid,Row,Table, Form} from 'react-bootstrap';
import Footer from './Footer';
class Contact extends Component {
   
    render() { 
        return ( <div >
            
        <Grid className="contact-style">
        <Table >
        <Row>
        <h3>Contact</h3>
        </Row>
        <Row>
            <Form id="contact-form" action="" method="post" role="form" class="contactForm">
    						<Row >
    							<Col md={6} >
    							    <div class="form-group">
        								<input type="text" name="nome" class="form-control" id="name" placeholder="Nome" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        
                                    </div>
    							</Col>
    							<Col md={6} >
    							    <div class="form-group">
        								<input type="email" class="form-control" name="email" id="email" placeholder="E-mail" data-rule="email" data-msg="Please enter a valid email" />
                                        
    							    </div>
    							</Col>
    						</Row>
    						<Row >
    							<Col md={12}>
    								<div class="form-group">
    									<input type="text" class="form-control" name="subject" id="subject" placeholder="Assunto" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                        
    								</div>
    								<div class="form-group">
    									<textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Menssagem"></textarea>
                                        
    								</div>						
    								<Button type="submit" bsStyle="warning" id="btnContactUs">
    									Enviar </Button>
    							</Col>
    						</Row>
						</Form>
                    </Row>
                    <Row>
                        <br/>
                        <p>Phone: 514-122-3333</p>
                        <p>1760 Maisonneuve Ouest/West suite 200</p>
                        <p>Montreal QC H3H 2N4</p>
                    </Row>
                 </Table>
                </Grid>
            <Footer />
          </div> );
    }
   
}
 
export default Contact;