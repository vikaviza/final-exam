import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

const EditContact = () => {
    const {id} = useParams()
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [age, setAge] = useState()
    const [mobile, setMobile] = useState()
    const [email, setEmail] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/getClient/' + id)
        .then(result => {console.log(result)
            setName(result.data.name)
            setSurname(result.data.surname)
            setAge(result.data.age)
            setMobile(result.data.mobile)
            setEmail(result.data.email)
        })
        .catch(err => console.log(err))
    }, [])

    const Edit = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/editClient/" + id, {name, surname, age, mobile, email})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }
    return (
        <>
            <section className="editContact">
                <div className="editContactContainer">
                    <h2>Edit Contact</h2>
                </div>

                <div className="editformContainer">
                    <form onSubmit={Edit}>
                        <input 
                            type="text" 
                            placeholder="Name" 
                            pattern="[A-Z][a-z]+"
                            value={name} 
                            onChange={(e) => setName(e.target.value)}/>
                        <input 
                            type="text" 
                            placeholder="Surname" 
                            pattern="[A-Z][a-z]+"
                            value={surname} 
                            onChange={(e) => setSurname(e.target.value)}/>
                        <input 
                            type="number" 
                            placeholder="Age" 
                            maxlength="2" min="18"
                            value={age} 
                            onChange={(e) => setAge(e.target.value)}/>
                        <input 
                            type="tel" 
                            placeholder="Phone Number" 
                            maxlength="12"
                            value={mobile} 
                            onChange={(e) => setMobile(e.target.value)}/>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}/>
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

export default EditContact;