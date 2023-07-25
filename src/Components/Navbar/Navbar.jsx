import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckField } from '@fortawesome/free-solid-svg-icons'
import {
    Sky,
    NavContainer,
    Brand
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
                            <span>
                                Travel
                            </span>
                        </Brand>
                        
                    </Link>
                </NavContainer>
            </nav>
        </>
    )
};

export default Navbar;