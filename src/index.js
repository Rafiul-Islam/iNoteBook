import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {NoteProvider} from "./context/notes/noteContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <NoteProvider>
                <App/>
            </NoteProvider>
        </BrowserRouter>
    </React.StrictMode>
);
