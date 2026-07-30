import "./ChatList.css";
import { useContext } from "react";
import { ContactContext } from "../../Context/ContactContext";
import ChatItem from "../ChatItem/ChatItem";
import { useSearchParams } from "react-router-dom";

function ChatList() {

    const { contacts } = useContext(ContactContext);

    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("search") || "";

    return (
        <section className="chat-list">

            <div className="chat-list-header">

                <h2>WhatsApp</h2>

                <div className="header-icons">
                    <i className="bi bi-pencil-square"></i>
                    <i className="bi bi-three-dots-vertical"></i>
                </div>

            </div>

            <div className="search-container">

                <i className="bi bi-search"></i>

                <input
                    type="text"
                    placeholder="Buscar un chat o iniciar uno nuevo"
                    value={search}
                    onChange={(event) => {

                        if (event.target.value === "") {
                            setSearchParams({});
                        }
                        else {
                            setSearchParams({
                                search: event.target.value
                            });
                        }

                    }}
                />

            </div>

            <div className="filters">

                <button>Todos</button>
                <button>No leídos</button>
                <button>Favoritos</button>
                <button>Grupos</button>

            </div>

            <div className="chat-items">

                {contacts
                    .filter((contact) =>
                        contact.name
                            .toLowerCase()
                            .includes(search.toLowerCase())
                    )
                    .map((contact) => (
                        <ChatItem
                            key={contact.id}
                            contact={contact}
                        />
                    ))}

            </div>

        </section>
    );
}

export default ChatList;