import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckField, faPhone } from '@fortawesome/free-solid-svg-icons'
import {
    Sky,
    NavContainer,
    Brand,
    Contact,
    ContactText,
    PhoneNumber
} from './Navbar.style';



const Navbar = () => {
    return (
        <>
            <nav>
                <Sky />
                <NavContainer>
                    <Link to={'/'} style={{textDecoration: 'none'}} >
                        <Brand>
                            Fest
                            <FontAwesomeIcon icon={faTruckField} style={{marginInline: '5px', color: '#2D2424'}} />
                            Travel
                        </Brand>
                    </Link>

                    <Contact>
                        <ContactText>Call for Registration</ContactText>
                        <FontAwesomeIcon icon={faPhone} style={{marginLeft: '10px', color: '#2D2424', fontSize: '25px'}} />
                        <PhoneNumber><i>+37064447899</i></PhoneNumber>
                    </Contact>
                </NavContainer>
            </nav>
        </>
    )
};

export default Navbar;