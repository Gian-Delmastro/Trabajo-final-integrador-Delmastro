import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Screens/Home/Home";
import { ContactContextProvider } from "./Context/ContactContext";

function App() {

    return (

        <Routes>

            <Route element={<ContactContextProvider />}>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/chat/:contact_id"
                    element={<Home />}
                />

            </Route>

        </Routes>

    );

}

export default App;