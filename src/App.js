
import './styles/header.css';
import './styles/footer.css';
import './styles/landingpage.css';
import {
  ChakraProvider,
  theme,
  Heading,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';
import Footer from './components/Footer';
import Login from './components/Login';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
