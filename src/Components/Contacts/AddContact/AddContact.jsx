import React from "react";
import {Link} from 'react-router-dom';
import AddButton from "../../Buttons/AddButton/AddButton";

const AddContact = () => {
    return (
        <>
            <section className="addContact">
                <div className="addContactContainer">
                    <h2>Create Contact</h2>
                </div>
                <div className="addformContainer">
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

export default AddContact;