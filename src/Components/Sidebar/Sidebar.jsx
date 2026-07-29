import BocaEscudo from "../../assets/BocaEscudo.png";
import "./Sidebar.css";

function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="sidebar-top">
                <i className="bi bi-chat-left-text-fill"></i> 
                <i className="bi bi-telephone"></i>
                <i className="bi bi-ubuntu"></i>
                <i className="bi bi-chat-text"></i>
                <i className="bi bi-people-fill"></i>

                <hr className="sidebar-divider" />
            </div>

            <div className="sidebar-bottom">
                <i className="bi bi-images"></i>

                <img
                    src={BocaEscudo}
                    alt="Perfil"
                    className="sidebar-profile"
                />
            </div>

        </aside>

    )
}

export default Sidebar


