import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import  CloseButton from '../../Buttons/CloseButton/CloseButton';
import  SubmitButton from '../../Buttons/SubmitButton/SubmitButton';
import axios from "axios";
import {
    AddContactSection,
    AddFormContainer,
    AddForm,
    AddInput,
    AddButtonContainer
} from './AddContact.style';

const AddContact = () => {
    const [name, setName] = useState()
    const [surname, setSurame] = useState()
    const [birthdate, setBirthdate] = useState()
    const [mobile, setMobile] = useState()
    const [email, setEmail] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/addClient/", {name, surname, birthdate, mobile, email})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <AddContactSection>
                <AddFormContainer>
                    <AddForm onSubmit={Submit}>
                        
                        <AddInput 
                            type="text" 
                            placeholder="Name" 
                            pattern="[A-Z][a-z]+" 
                            onChange={(e) => setName(e.target.value)} 
                            required
                        />
                        <AddInput 
                            type="text" 
                            placeholder="Surname" 
                            pattern="[A-Z][a-z]+" 
                            onChange={(e) => setSurame(e.target.value)} 
                            required
                        />
                        <AddInput 
                            type="date" 
                            onChange={(e) => setBirthdate(e.target.value)} 
                            required
                        />
                        <AddInput 
                            type="tel" 
                            placeholder="Phone Number" 
                            minLength="12" 
                            maxLength="12" 
                            onChange={(e) => setMobile(e.target.value)} 
                            required
                        />
                        <AddInput 
                            type="email" 
                            placeholder="Email" 
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                        />
                        <AddButtonContainer>
                            <SubmitButton/>
                            
                            <Link to={'/contacts/list'}>
                                <CloseButton />
                            </Link>
                        </AddButtonContainer>

                    </AddForm>
                </AddFormContainer>
            </AddContactSection>
        </>
    )
};

export default AddContact;