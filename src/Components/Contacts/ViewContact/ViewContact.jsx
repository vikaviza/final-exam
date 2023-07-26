import React, { useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from 'react-router-dom';
import {
    ViewContactSection
} from './ViewContact.style'

const ViewContact = () => {
    const {id} = useParams()
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [age, setAge] = useState()
    const [mobile, setMobile] = useState()
    const [email, setEmail] = useState()

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

    return (
        <>
            <ViewContactSection>
                <div className="viewContact">
                    <h2>View Contact</h2>
                </div>
            

             <div className="contactCard">
                <ul>
                    <li>Name: <span>{name}</span></li>
                    <li>Surname: <span>{surname}</span></li>
                    <li>Age: <span>{age}</span></li>
                    <li>Phone Number: <span>{mobile}</span></li>
                    <li>Email: <span>{email}</span></li>
                </ul>
            </div>

            <Link to={'/contacts/list'}>
                <button>Close</button>
            </Link>
            </ViewContactSection>
        </>
    )
};

export default ViewContact;