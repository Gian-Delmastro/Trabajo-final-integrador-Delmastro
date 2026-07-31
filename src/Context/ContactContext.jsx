import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import MessiCopa from "../assets/MessiCopa.jpg";
import Paredes from "../assets/Paredes.jpg";
import Scaloni from "../assets/Scaloni.jpg";
import DePaul from "../assets/DePaul.jpg";
import DiMaria from "../assets/DiMaria.jpg";
import Riquelme from "../assets/Riquelme.jpg"


const ContactContext = createContext();

const server_contacts = [
    {
        id: 1,
        name: "Lionel Messi",
        avatar: MessiCopa,
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
    },
    {
        id: 4,
        name: "Rodrigo De Paul",
        avatar: DePaul,
        lastMessage: "Nos vemos en la próxima fecha FIFA",
        lastTime: "14:30",
        messages: [
            {
                id: 1,
                sendByMe: false,
                content: "Che, como andas?",
                time: "14:20"
            },
            {
                id: 2,
                sendByMe: true,
                content: "Todo bien, vos?",
                time: "14:25"
            },
            {
                id: 3,
                sendByMe: false,
                content: "Nos vemos en la próxima fecha FIFA",
                time: "14:30"
            }
        ]
    },
    {
        id: 5,
        name: "Angel Di María",
        avatar: DiMaria,
        lastMessage: "Como va todo?",
        lastTime: "12:10",
        messages: [
            {
                id: 1,
                sendByMe: false,
                content: "Buenas",
                time: "12:05"
            },
            {
                id: 2,
                sendByMe: false,
                content: "Como va todo?",
                time: "12:10"
            }
        ]
    },
    {
        id: 6,
        name: "Juan Román Riquelme",
        avatar: Riquelme,
        lastMessage: "Aguante Boca campeón",
        lastTime: "10:05",
        messages: [
            {
                id: 1,
                sendByMe: false,
                content: "Buen día",
                time: "10:00"
            },
            {
                id: 2,
                sendByMe: false,
                content: "Aguante Boca campeón",
                time: "10:05"
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