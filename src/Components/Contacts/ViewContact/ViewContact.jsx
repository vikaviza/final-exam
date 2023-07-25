import React, { useEffect, useState} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

const ViewContact = () => {
    const [clients, setClients] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/')
        .then(result => setClients(result.data))
        .catch(err => console.log(err))
    }, [])
    return (
        <>
            <section className="viewContact">
                <div className="viewContact">
                    <h2>View Contact</h2>
                </div>
            </section>
            {clients.map((client) => {
                    

            return <div className="contactCard">
                <ul>
                    <li>Name: <span>{client.name}</span></li>
                    <li>Surname: <span>{client.surname}</span></li>
                    <li>Age: <span>{client.age}</span></li>
                    <li>Phone Number: <span>{client.mobile}</span></li>
                    <li>Email: <span>{client.email}</span></li>
                </ul>
            </div>
            })
        }
            <Link to={'/contacts/list'}>
                <button>Close</button>
            </Link>
        </>
    )
};

export default ViewContact;