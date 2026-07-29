import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Messi from "../assets/Messi.png";
import Paredes from "../assets/Paredes.jpg";
import Scaloni from "../assets/Scaloni.jpg";

const ContactContext = createContext();

const server_contacts = [
    {
        id: 1,
        name: "Lionel Messi",
        avatar: Messi,
        lastMessage: "Todo bien?",
        lastTime: "18:46",
        messages: [
            {
                id: 1,
                sendByMe: false,
                content: "Hola!",
                time: "18:40"
            },
            {
                id: 2,
                sendByMe: true,
                content: "Hola Messi!",
                time: "18:41"
            },
            {
                id: 3,
                sendByMe: false,
                content: "Todo bien?",
                time: "18:46"
            }
        ]
    },
    {
        id: 2,
        name: "Lionel Scaloni",
        avatar: Scaloni,
        lastMessage: "Todo tranqui por suerte",
        lastTime: "16:20",
        messages: [
            {
                id: 1,
                sendByMe: false,
                content: "Buenas, ¿Cómo estás?",
                time: "16:15"
            },
            {
                id: 2,
                sendByMe: true,
                content: "Todo bien Lio, vos?",
                time: "16:17"
            },
            {
                id: 3,
                sendByMe: false,
                content: "Todo tranqui por suerte",
                time: "16:20"
            }
        ]
    },
    {
        id: 3,
        name: "Leandro Paredes",
        avatar: Paredes,
        lastMessage: "Aguante Boca!",
        lastTime: "16:16",
        messages: [
            {
                id: 1,
                sendByMe: false,
                content: "Que haces, genio!",
                time: "16:15"
            },
            {
                id: 2,
                sendByMe: false,
                content: "Aguante Boca!",
                time: "16:16"
            }
        ]
    }
];

function ContactContextProvider({ children }) {

    const [contacts, setContacts] = useState(server_contacts);

    const [selectedContact, setSelectedContact] = useState(server_contacts[0]);

    function createMessage(content) {

        const now = new Date();

        const time =
            now.getHours().toString().padStart(2, "0") +
            ":" +
            now.getMinutes().toString().padStart(2, "0");

        const newMessage = {
            id: selectedContact.messages.length + 1,
            content,
            sendByMe: true,
            time
        };

        const updatedContacts = contacts.map((contact) => {

            if (contact.id === selectedContact.id) {

                return {
                    ...contact,
                    messages: [...contact.messages, newMessage],
                    lastMessage: content,
                    lastTime: time
                };
            }

            return contact;
        });

        setContacts(updatedContacts);

        setSelectedContact(
            updatedContacts.find(
                contact => contact.id === selectedContact.id
            )
        );
    }

    const providerValues = {
        contacts,
        selectedContact,
        setSelectedContact,
        createMessage
    };

    return (
        <ContactContext.Provider value={providerValues}>
            <Outlet />
        </ContactContext.Provider>
    );
}

export { ContactContext, ContactContextProvider };