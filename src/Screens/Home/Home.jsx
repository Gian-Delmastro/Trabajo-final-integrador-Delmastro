import "./Home.css";

import ChatList from "../../Components/ChatList/ChatList";
import Sidebar from "../../Components/Sidebar/Sidebar";

function Home() {

    return (
        <div className="home">
            <Sidebar />
            <ChatList />

            <div className="empty-chat">
                <p>Selecciona un chat para empezar a conversar</p>
            </div>
        </div>
    );
}

export default Home;