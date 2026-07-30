import "../Home/Home.css";

import ChatList from "../../Components/ChatList/ChatList";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ChatWindow from "../../Components/ChatWindow/ChatWindow";

import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ContactContext } from "../../Context/ContactContext";

function Chat() {
    const { contact_id } = useParams();

    const { contacts, setSelectedContact } = useContext(ContactContext);

    useEffect(() => {

        const contact = contacts.find(
            contact => contact.id === Number(contact_id)
        );

        if (contact) {
            setSelectedContact(contact);
        }

    }, [contact_id, contacts, setSelectedContact]);

    return (
        <div className="home chat-active">
            <Sidebar />
            <ChatList />
            <ChatWindow />
        </div>
    );
}

export default Chat;