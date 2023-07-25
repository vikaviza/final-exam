import React from "react";
import {Link} from 'react-router-dom';
import AddButton from "../../Buttons/AddButton/AddButton";
import {
    ContactSearch,
    AddContainer
} from './ContactList.style';

const ContactList = () => {
    return (
        <>
            <ContactSearch>

                <AddContainer>
                    <h2>Add new client:</h2>
                    <Link to={'/contacts/add'}>
                        <AddButton text='ADD +' /> 
                    </Link>
                </AddContainer>

                    <div className="searchContainer">
                        <form>
                            <input type="text" className="form-control" placeholder="Search Clients" />
                            <input type="submit" className="searchSubmit" value="Search"/>
                        </form>
                    </div>
                    
            </ContactSearch>
            <section className="contactList">
                
                <div className="clientCard">
                    <ul>
                        <li>Name: <span>Client</span></li>
                        <li>Surname: <span>Client</span></li>
                        <li>Phone Number: <span>+37099999999</span></li>
                        <li>Email: <span>client@email.com</span></li>
                    </ul>

                    <Link to={'/contacts/view/:contactId'}>
                        <button>View</button>
                    </Link>

                    <Link to={'/contacts/edit/:contactId'}>
                        <button>Edit</button>
                    </Link>
                    
                    <button>Delete</button>
                </div>

            </section>
        </>
    )
};

export default ContactList;