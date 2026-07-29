import { useContext, useState } from "react";
import { useEffect, useRef } from "react";
import { ContactContext } from "../../Context/ContactContext";
import Message from "../../Components/Message/Message";
import "./ChatWindow.css";
import { useNavigate } from "react-router-dom";

function ChatWindow() {

    const { selectedContact, createMessage } = useContext(ContactContext);

    const [newMessage, setNewMessage] = useState("");

    const navigate = useNavigate();

    const messagesEndRef = useRef(null);

    useEffect(() => {

        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });

    }, [selectedContact.messages]);

    
    function handleSubmit(event) {

        event.preventDefault();

        if (newMessage.trim() === "") {
            return;
        }

        createMessage(newMessage);

        setNewMessage("");
    }

    return (
        <section className="chat-window">

            <header className="chat-header">

                <div className="chat-info">

                    <i
                        className="bi bi-arrow-left back-button"
                        onClick={() => navigate("/")}
                    ></i>

                    <img
                        src={selectedContact.avatar}
                        alt={selectedContact.name}
                        className="chat-avatar"
                    />

                    <div className="chat-user">

                        <h3>{selectedContact.name}</h3>
                        <p>en línea</p>

                    </div>

                </div>

                <div className="chat-actions">

                    <i className="bi bi-telephone"></i>
                    <i className="bi bi-search"></i>
                    <i className="bi bi-three-dots-vertical"></i>

                </div>

            </header>

            <main className="chat-body">

                {selectedContact.messages.map((message) => (

                    <Message
                        key={message.id}
                        message={message}
                    />

                ))}

                <div ref={messagesEndRef}></div>

            </main>

            <form
                className="chat-footer"
                onSubmit={handleSubmit}
            >

                <div className="footer-left">

                    <i className="bi bi-emoji-smile"></i>
                    <i className="bi bi-plus-lg"></i>

                </div>

                <input
                    type="text"
                    placeholder="Escribe un mensaje"
                    value={newMessage}
                    onChange={(event) => setNewMessage(event.target.value)}
                />

                <button
                    type="submit"
                    className="send-button"
                >
                    <i className="bi bi-send-fill"></i>
                </button>

            </form>

        </section>
    );
}

export default ChatWindow;