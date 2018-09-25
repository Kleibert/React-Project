import React, {Component}from 'react';
import {Link} from 'react-router-dom';
import {Nav,Navbar, NavItem} from 'react-bootstrap';

/*creating list of  Router links*/
const links = [
    { route: "/", label: "Home"},
    { route: "/about", label: "About"},
    { route: "/Contact", label: "Contact"},
    
];

class NavBarApp extends Component {
    /*Maping list links*/
    renderLink = () => {
        return links.map( link =>
            <NavItem>
            <Link key={link.route} to={link.route}>
                {link.label}
            </Link>
            </NavItem>
        )
    }
    render(){
    return(
     
     <Navbar>
         <Navbar.Header>
             <Navbar.Brand>
                  <Link to="/">FAMA</Link>
             </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
         <Nav pullRight>
         {/*render router links */}
             {this.renderLink()}
             
       </Nav>
       </Navbar.Collapse>
     </Navbar>
        
     
 );
}


}
export default NavBarApp;