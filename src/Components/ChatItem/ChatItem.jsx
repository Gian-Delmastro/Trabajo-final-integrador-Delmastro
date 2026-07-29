import { useContext } from "react";
import { ContactContext } from "../../Context/ContactContext";
import "./ChatItem.css";
import { useNavigate } from "react-router-dom";


function ChatItem({ contact }) {

    const { selectedContact, setSelectedContact } = useContext(ContactContext);
    const navigate = useNavigate();

    return (
        <div
            className={
                selectedContact.id === contact.id
                    ? "chat-item selected"
                    : "chat-item"
            }
            onClick={() => navigate(`/chat/${contact.id}`)}
        >

            <img
                src={contact.avatar}
                alt={contact.name}
                className="chat-item-avatar"
            />

            <div className="chat-item-info">

                <h4>{contact.name}</h4>

                <p>{contact.lastMessage}</p>

            </div>

            <span className="chat-item-time">
                {contact.lastTime}
            </span>

        </div>
    );
}

export default ChatItem;