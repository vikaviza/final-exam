import React from "react";
import {Link} from 'react-router-dom';

const EditContact = () => {
    return (
        <>
            <section className="editContact">
                <div className="editContactContainer">
                    <h2>Edit Contact</h2>
                </div>
                <div className="editformContainer">
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Surname" />
                        <input type="number" placeholder="Age" />
                        <input type="number" placeholder="Phone Number" />
                        <input type="email" placeholder="Email" />
                        <input type="submit" value="Submit"/>
                        <Link to={'/contacts/list'}>
                            <button>Close</button>
                        </Link>
                    </form>
                </div>
            </section>
        </>
    )
};

export default EditContact;