import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import  CloseButton from '../../Buttons/CloseButton/CloseButton';
import  SubmitButton from '../../Buttons/SubmitButton/SubmitButton';
import {
    EditContactSection,
    EditformContainer,
    EditForm,
    EditInput,
    EditButtonContainer
} from './EditContact.style';

const EditContact = () => {
    const {id} = useParams()
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [birthdate, setBirthdate] = useState()
    const [mobile, setMobile] = useState()
    const [email, setEmail] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/getClient/' + id)
        .then(result => {console.log(result)
            setName(result.data.name)
            setSurname(result.data.surname)
            setBirthdate(result.data.birthdate)
            setMobile(result.data.mobile)
            setEmail(result.data.email)
        })
        .catch(err => console.log(err))
    }, [])

    const Edit = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/editClient/" + id, {name, surname, birthdate, mobile, email})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }
    return (
        <>
            <EditContactSection>

                <EditformContainer>
                    <EditForm onSubmit={Edit}>
                        <EditInput 
                            type="text" 
                            placeholder="Name" 
                            pattern="[A-Z][a-z]+"
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <EditInput 
                            type="text" 
                            placeholder="Surname" 
                            pattern="[A-Z][a-z]+"
                            value={surname} 
                            onChange={(e) => setSurname(e.target.value)}
                            required
                        />
                        <EditInput 
                            type="date" 
                            onChange={(e) => setBirthdate(e.target.value)}
                            required
                        />
                        <EditInput 
                            type="tel" 
                            placeholder="Phone Number" 
                            maxlength="12"
                            value={mobile} 
                            onChange={(e) => setMobile(e.target.value)}
                            required
                        />
                        <EditInput 
                            type="email" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <EditButtonContainer>
                        <SubmitButton/>
                            
                            <Link to={'/contacts/list'}>
                                <CloseButton />
                            </Link>
                        </EditButtonContainer>

                    </EditForm>
                </EditformContainer>
            </EditContactSection>
        </>
    )
};

export default EditContact;
