import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import {Box} from '@chakra-ui/react';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
    return (
        <div>
            <Header />
            <Box display='flex' minH='90vh' >
                <Sidebar />
                <Main />
            </Box>
        </div>
    )
}

export default App;