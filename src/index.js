import React from 'react';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import {NoteProvider} from "./context/notes/noteContext";
import 'react-toastify/dist/ReactToastify.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {UserLoginStatusContextProvider} from "./context/userLoginStatusContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserLoginStatusContextProvider>
                <NoteProvider>
                    <App/>
                </NoteProvider>
            </UserLoginStatusContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);
