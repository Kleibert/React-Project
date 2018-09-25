import React,{ Component }  from 'react';
import drive from'./../assets/drive.jpg';
import  './style.css';
import{Table,Row} from 'react-bootstrap';

/*set img background*/
var sectionStyle = {
   
    backgroundImage: `url(${drive})`,
    
  };

class Home extends Component {
 
    
    render() {  
        
        return ( 
            <section class="home-style"style={ sectionStyle }>
            <Table className="animation">
            <Row className="text-animation"><h2>Fama Driving School</h2> 
                <p>Is one of the most reputable 
                schools in the greater Downtown area</p></Row>
            </Table>
            
            </section>
            
            
          );
    }
}
 
export default Home;