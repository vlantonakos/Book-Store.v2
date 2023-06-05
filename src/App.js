import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Books from './components/Books';
import About from './components/About';
import Contact from './components/Contact';
import BookDetails from './components/BookDetails'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{width:'100%',height:'100%',backgroundColor: 'rgb(238,174,202)',background:'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'}}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </Box>
  );
}

export default App;
