import React from "react";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'

const ContactList = () => {
    return (
        <>
            <section className="contactSearch">
                <div className="container">
                    <div className="col">
                        <h3>Add new client</h3>
                        <Link to={'/contacts/add'}>

                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
};

export default ContactList;