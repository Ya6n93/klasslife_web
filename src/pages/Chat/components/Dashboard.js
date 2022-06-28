import React, { useState} from 'react';
import OpenConversation from './OpenConversation';
import Sidebar from './Sidebar';
import { useConversations } from '../contexts/ConversationsProvider';

const Dashboard = ({id}) => {
    const { selectedConversation } = useConversations()
    return (
        <div className="d-flex" style={{ height: '80vh' }}>
            <Sidebar id={id} />
            {selectedConversation && <OpenConversation />}
        </div>
    );
  };
  
  export default Dashboard;