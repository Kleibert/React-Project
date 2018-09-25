import React,{ Component }  from 'react';
import{Col,Grid,Image,Table,Row} from 'react-bootstrap';
import mission from './../assets/mission-vision-values-graphic.png';
import Services from './Services';
import Footer from './Footer';
import './style.css';

class About extends Component {
    
    render() { 
        return ( <div>
            <Grid>
                <Table>
                    <Row>
                    <h3>About</h3>
                    <hr/>
                    </Row>
                    <Row>
                        <Col xs={12} sm={4} lg={3} className="text-center" >
                        <Image className="img-mission" src={mission} />
                        </Col>
                        <Col xs={12} sm={8} lg={9} >
                         <p>  Our Mission is to educate students to drive defensively by 
                        creating safe and responsible drivers.</p>

                        <p>Having your own license is essential in today’s world. 
                        Imagine trying to find a job without one. Public transportation 
                        doesn’t always go where you need to go, and it may take hours instead 
                        of minutes to get where you want. Owning your own driver’s license 
                        opens up a world of opportunities that may not be open to you otherwise. 
                        Getting your license and achieving your independence could be a long 
                        and difficult path. We make it easy and fast for you. Our instructors
                        and our unique methodology transform the complex to the simple and
                        provide you the best possible training. Start today on the path to 
                        becoming an independent driver the easiest and fastest way! </p>
                        </Col>
                    
                    </Row>
                    
                    
                </Table>
            </Grid>
            {/*Call components Services and Footer*/}
            <Services />
            <Footer/>
          </div> );
    }
}
 
export default About;