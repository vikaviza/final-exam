import React from "react";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'

const ContactList = () => {
    return (
        <>
            <section className="contactSearch">

                <div className="addContainer">
                    <h3>Add new client</h3>
                    <Link to={'/contacts/add'}>
                        <button>
                        ADD 
                        <FontAwesomeIcon icon={faSquarePlus} />
                        </button>
                    </Link>
                </div>

                    <div className="searchContainer">
                        <form>
                            <input type="text" className="form-control" placeholder="Search Clients" />
                            <input type="submit" className="searchSubmit" value="Search"/>
                        </form>
                    </div>
                    
            </section>
            <section className="contactList">
                <table className="clientCard">
                    <tr>
                        <td>Name: <span>Client</span></td>
                        <td>Mobile Number: <span>+37099999999</span></td>
                        <td>Email: <span>client@email.com</span></td>
                    </tr>
                </table>
            </section>
        </>
    )
};

export default ContactList;