import React from "react";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckField } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return (
        <>
            <nav>
                <div className="navContainer">
                    <Link to={'/'}>
                        Fest<FontAwesomeIcon icon={faTruckField} /><span>Travel</span>
                    </Link>
                </div>
            </nav>
        </>
    )
};

export default Navbar;