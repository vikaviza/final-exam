import React, { useEffect, useState} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import AddButton from "../../Buttons/AddButton/AddButton";
import {
    ContactSearch,
    AddContainer
} from './ContactList.style';

const ContactList = () => {
    const [clients, setClients] = useState([])
    const [query, setQuery] = useState("");

    useEffect(() => {
        axios.get('http://localhost:3001/')
        .then(result => setClients(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteClient/'+id)
        .then(res => {console.log(res)
            window.location.reload()})
        .catch(errr => console.log(errr))
    }

    return (
        <>
            <ContactSearch>
                <AddContainer>
                    <h2>Add new client:</h2>
                    <Link to={'/contacts/add'}>
                        <AddButton /> 
                    </Link>
                </AddContainer>

                    <div className="searchContainer">
                        <form>
                            <input 
                            name="text"
                            type="text"
                            placeholder="Search Clients" 
                            onChange={e => setQuery(e.target.value)}
                            />
                            
                        </form>
                    </div>
            </ContactSearch>

            <section className="contactList">
                {clients.filter(client=>client.name.toLowerCase().includes(query)).map((client) => {
                    
                return <div  className="clientCard">
                        <ul>
                            <li>Name: <span>{client.name}</span></li>
                            <li>Surname: <span>{client.surname}</span></li>
                            <li>Phone Number: <span>{client.mobile}</span></li>
                        </ul>

                        <Link to={`/contacts/view/${client._id}`}>
                            <button>View</button>
                        </Link>

                        <Link to={`/contacts/edit/${client._id}`}>
                            <button>Edit</button>
                        </Link>
                        
                        <button onClick={() => handleDelete(client._id)}>Delete</button>
                    </div>
                    })
                }
            </section>
        </>
    )
};

export default ContactList;