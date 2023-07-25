import React from "react";
import {Link} from 'react-router-dom';

const ViewContact = () => {
    return (
        <>
            <section className="viewContact">
                <div className="viewContact">
                    <h2>View Contact</h2>
                </div>
            </section>
            <div className="contactCard">
                <ul>
                    <li>Name: <span>Client</span></li>
                    <li>Surname: <span>Client</span></li>
                    <li>Age: <span>20</span></li>
                    <li>Phone Number: <span>+37099999999</span></li>
                    <li>Email: <span>client@email.com</span></li>
                </ul>
            </div>
            <Link to={'/contacts/list'}>
                <button>Close</button>
            </Link>
        </>
    )
};

export default ViewContact;