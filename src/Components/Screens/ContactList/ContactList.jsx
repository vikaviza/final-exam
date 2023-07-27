import React, { useEffect, useState} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import AddButton from "../../Buttons/AddButton/AddButton";
import ViewButton from "../../Buttons/ViewButton/ViewButton";
import EditButton from "../../Buttons/EditButton/EditButton";
import DeleteButton from "../../Buttons/DeleteButton/DeleteButton";
import {
    ContactContainer,
    ContactSearch,
    AddContainer,
    About,
    SearchContainer,
    SearchInput,
    ContactListSection,
    ClientCard,
    ClientUl,
    ClientListItem,
    ClientSpan,
    ClientButtons
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
        <ContactContainer>
                <ContactSearch>
                    <AddContainer>
                        <About>
                            <p>To visit a country and meet its people during a festival can be an experience second to none: you will bring home not just life-long memories of colour, music, dancing and fun but also a richer understanding of the traditions and beliefs that make the country what it is.</p>
                        </About>
                        <Link to={'/contacts/add'} >
                            <AddButton /> 
                        </Link>
                    </AddContainer>

                        <SearchContainer>
                            <form>
                                <SearchInput 
                                name="text"
                                type="text"
                                placeholder="Search for Clients..." 
                                onChange={e => setQuery(e.target.value)}
                                />

                            </form>
                        </SearchContainer>
                </ContactSearch>

                <ContactListSection>
                    {
                    clients.filter(client=>client.name.includes(query)).map((client) => {
                        
                return <ClientCard>
                            <ClientUl>
                                <ClientListItem>Name: <ClientSpan>{client.name}</ClientSpan></ClientListItem>
                                <ClientListItem>Surname: <ClientSpan>{client.surname}</ClientSpan></ClientListItem>
                                <ClientListItem>Phone Number: <ClientSpan>{client.mobile}</ClientSpan></ClientListItem>
                            </ClientUl>

                            <ClientButtons>
                                <Link to={`/contacts/view/${client._id}`}>
                                    <ViewButton />
                                </Link>

                                <Link to={`/contacts/edit/${client._id}`}>
                                    <EditButton />
                                </Link>

                                <button onClick={() => handleDelete(client._id)} style={{background: 'transparent', border: '0'}}><DeleteButton /></button>
                            </ClientButtons>
                        </ClientCard>
                        })
                    }
                </ContactListSection>
            </ContactContainer>
        </>
    )
};

export default ContactList;