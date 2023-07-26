import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const AddContact = () => {
    const [name, setName] = useState()
    const [surname, setSurame] = useState()
    const [age, setAge] = useState()
    const [mobile, setMobile] = useState()
    const [email, setEmail] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/addClient/", {name, surname, age, mobile, email})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <section className="addContact">
                <div className="addContactContainer">
                    <h2>Create Contact</h2>
                </div>

                <div className="addformContainer">
                    <form onSubmit={Submit}>
                        
                        <input 
                            type="text" 
                            placeholder="Name" 
                            pattern="[A-Z][a-z]+" 
                            onChange={(e) => setName(e.target.value)} 
                            required
                        />
                        <input 
                            type="text" 
                            placeholder="Surname" 
                            pattern="[A-Z][a-z]+" 
                            onChange={(e) => setSurame(e.target.value)} 
                            required
                        />
                        <input 
                            type="number" 
                            placeholder="Age" 
                            max="120" 
                            min="18" 
                            onChange={(e) => setAge(e.target.value)} 
                            required
                        />
                        <input 
                            type="tel" 
                            placeholder="Phone Number" 
                            minLength="12" 
                            maxLength="12" 
                            onChange={(e) => setMobile(e.target.value)} 
                            required
                        />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                        />
                        
                        <button>Submit</button>
                        
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