import React, { useState} from 'react';
import {Tab, Nav, Button, Modal} from 'react-bootstrap';
import Conversations from './Conversation';
import Contacs from './Contacs';
import NewConversationModal from './NewConversationModal';
import NewContactModal from './NewContactModal';

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'

const Sidebar = ({id}) => {

    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
    const [modalOpen, setModalOpen] = useState(false)
    const conversationsOpen = activeKey === CONVERSATIONS_KEY

    function closeModal(){
        setModalOpen(false)
    }

    return (
        <div style={{ width : '250px'}} className="d-flex flex-column">

            <div className='small'>
                Votre id : <span className="text-muted">{id}</span>
            </div>

            <Button onClick={() => setModalOpen(true)} className='my-3'>
                 {conversationsOpen ? 'Nouvelle conversation' : 'Nouveau contact'}
            </Button>

            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant='tabs' className='justify-content-center'>
                    <Nav.Item>
                        <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Tab.Content>
                    <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                        <Conversations />
                    </Tab.Pane>

                    <Tab.Pane eventKey={CONTACTS_KEY}>
                        <Contacs />
                    </Tab.Pane>

                </Tab.Content>

            </Tab.Container>

            <Modal show={modalOpen} onHide={closeModal}>
                {conversationsOpen ? 
                    <NewConversationModal closeModal={closeModal} /> :
                    <NewContactModal closeModal={closeModal} />
                }
            </Modal>
        </div>
    );
  };
  
  export default Sidebar;