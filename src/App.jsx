import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Screens/Home/Home";
import Chat from "./Screens/Chat/Chat";
import { ContactContextProvider } from "./Context/ContactContext";
import { ThemeContextProvider } from "./Context/ThemeContext";

function App() {

    return (

        <Routes>

            <Route element={<ThemeContextProvider />}>

                <Route element={<ContactContextProvider />}>

                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/chat/:contact_id"
                        element={<Chat />}
                    />

                </Route>

            </Route>

        </Routes>

    );

}

export default App;