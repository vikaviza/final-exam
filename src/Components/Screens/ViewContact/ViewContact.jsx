import React, { useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faCloudSun } from '@fortawesome/free-solid-svg-icons';
import  CloseButton from '../../Buttons/CloseButton/CloseButton';
import {
    ViewContactSection,
    ViewSky,
    CloudSpan,
    CloudSunSpan,
    ViewContactCard,
    ViewContactUl,
    ViewContactli,
    ViewContactSpan
} from './ViewContact.style'

const ViewContact = () => {
    const {id} = useParams()
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [birthdate, setBirthdate] = useState()
    const [mobile, setMobile] = useState()
    const [email, setEmail] = useState()

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

    return (
        <>
            <ViewContactSection>
                <ViewSky>
                    <CloudSpan>
                        <FontAwesomeIcon icon={faCloud} />
                        <FontAwesomeIcon icon={faCloud} />
                    </CloudSpan>
                    <CloudSunSpan>
                        <FontAwesomeIcon icon={faCloudSun} />
                    </CloudSunSpan>
                </ViewSky>
             <ViewContactCard>
                <ViewContactUl>
                    <ViewContactli>Name: <ViewContactSpan>{name}</ViewContactSpan></ViewContactli>
                    <ViewContactli>Surname: <ViewContactSpan>{surname}</ViewContactSpan></ViewContactli>
                    <ViewContactli>Birthdate: <ViewContactSpan>{birthdate}</ViewContactSpan></ViewContactli>
                    <ViewContactli>Phone Number: <ViewContactSpan>{mobile}</ViewContactSpan></ViewContactli>
                    <ViewContactli>Email: <ViewContactSpan>{email}</ViewContactSpan></ViewContactli>
                </ViewContactUl>
                <Link to={'/contacts/list'}>
                    <CloseButton />
                </Link>
            </ViewContactCard>


            </ViewContactSection>
        </>
    )
};

export default ViewContact;