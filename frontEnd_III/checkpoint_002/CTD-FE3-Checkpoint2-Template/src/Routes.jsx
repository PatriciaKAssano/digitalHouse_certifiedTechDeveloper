import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Detail from "./Routes/Detail";

const AppRoutes = () => {
    return (
        
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dentist/:registration" element={<Detail />} />
            </Routes>
        
    );
};

export default AppRoutes;