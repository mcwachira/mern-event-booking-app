import React from 'react';
import {Button , Input} from 'antd'
import ThemeProvider from "./theme";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/auth/login/LoginPage.tsx";
import RegisterPage from "./pages/auth/register/RegisterPage.tsx";
import HomePage from "./pages/private/home/HomePage.tsx";

function App(props) {
    return (
        <ThemeProvider>
           <BrowserRouter>
               <Routes>
                   <Route path="/login" element={<LoginPage/>}/>
                   <Route path="/register" element={<RegisterPage/>}/>
                   <Route path="/" element={<HomePage/>}/>
               </Routes>
           </BrowserRouter>
        </ThemeProvider>

    );
}

export default App;