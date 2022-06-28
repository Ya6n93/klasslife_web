import React, { useState} from 'react';
import LoginChat from './components/LoginChat';
import useLocalStorage from './hooks/useLocalStorage';
import Dashboard from './components/Dashboard';
import { ContactsProvider } from './contexts/ContactsProvider';
import { ConversationsProvider } from './contexts/ConversationsProvider';
import { SocketProvider } from './contexts/SocketProvider';

const Chat = () => {

    const [id, setId] = useLocalStorage('id')

    const dashboard = (
        <SocketProvider id={id}>
            <ContactsProvider>
                 <ConversationsProvider id={id}>
                     <Dashboard id={id} />
                 </ConversationsProvider> 
             </ContactsProvider>
        </SocketProvider>
        
    )


    return (
        <>
            {id ? dashboard : <LoginChat onIdSubmit={setId}/>}
        </>
        

    );
  };
  
  export default Chat;