import React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import Simple from './Components/NavigationBar'
import Subscribe from './Pages/Subscribe';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './Pages/Login';
import Main from './Pages/Main';
import { extendTheme } from '@chakra-ui/react';
import { cardTheme } from './Components/CardStyles.js';
import Footer from './Components/Footer';
import { mode } from '@chakra-ui/theme-tools';
import Register from './Pages/Register';
import { FaMailBulk } from 'react-icons/fa';
import { UserContextProvider } from './UserContext';


const theme = extendTheme({
  components: {
    Card: cardTheme,
  },

  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('#feefe7', '#a87f71')(props),
      },
    }),
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Login/>
        <Simple />
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route index element={<Main/>}/>
            <Route path='/Subscribe' element={<Subscribe/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/>
          </Routes>
          <Footer/>
      </Router>
    </ChakraProvider>
  );
}

export default App;
