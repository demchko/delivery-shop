import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { ModalProvider } from './context/ModalContext';
import { AuthProvider } from './context/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <AuthProvider>
        <ModalProvider>
            <Provider store={store} >
                <BrowserRouter>
                    <ChakraProvider>
                        <App />
                    </ChakraProvider>
                </BrowserRouter>
            </Provider>
        </ModalProvider>
    </AuthProvider>
);

