import React from 'react';
import GlobalStyles from './styles/Global.style';
import { Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ContactList from './Components/Contacts/ContactList/ContactList';
import AddContact from './Components/Contacts/AddContact/AddContact';
import ViewContact from './Components/Contacts/ViewContact/ViewContact';
import EditContact from './Components/Contacts/EditContact/EditContact';


const App = () => {
    return (
      <>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
          <Route path={'/contacts/list'} element={<ContactList/>} />
          <Route path={'/contacts/add'} element={<AddContact/>} />
          <Route path={'/contacts/view/:id'} element={<ViewContact/>} />
          <Route path={'/contacts/edit/:id'} element={<EditContact/>} />
        </Routes>
        <Footer />
      </>
    );

}

export default App;