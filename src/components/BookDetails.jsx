import React from 'react'
import { useParams } from 'react-router-dom';
import book1 from '../assets/book1.png'
import book2 from '../assets/book2.png'
import book3 from '../assets/book3.png'
import book4 from '../assets/book4.png'
import { Box, Typography } from '@mui/material';

const BookDetails = () => {
    const { id } = useParams();

    const books = [
        { id: 1, title: 'The Puppeteers: The People Who Control the People Who Control America', image: `${book1}`, author: 'Author 1', description: 'Description 1' },
        { id: 2, title: 'Happy Place', image: `${book2}`, author: 'Author 2', description: 'Description 2' },
        { id: 3, title: 'The Book of Charlie: Wisdom from the Remarkable American Life of a 109-Year-Old Man', image: `${book3}`, author: 'Author 3', description: 'Description 3' },
        { id: 4, title: `Oh, the Places You'll Go!`, image: `${book4}`, author: 'Author 4', description: 'Description 4' },
    ];
    
    const book = books.find((book) => book.id === parseInt(id));

    if (!book) {
        return <div>Book not found</div>;
    }

  return (
    <Box sx={{pt:'5vh',height:'100vh',display:'grid',justifyContent:'center'}}>
        <Typography variant='h2' sx={{textAlign:'center'}}>{book.title}</Typography>
        <Box sx={{display:'flex',pt:0,mt:0}}>
            <img src={book.image} alt={book.title} style={{position:'relative',width:'50%',height:'80%'}} />
            <Box sx={{display:'grid'}}>
                <Typography variant='h5' sx={{pl:5,fontFamily:'Libre Baskerville',fontWeight:'400',fontSize:'1.4rem'}}>Author: {book.author}</Typography>
                <Typography variant='h5' sx={{pl:5,fontFamily:'Libre Baskerville',fontWeight:'400',fontSize:'1.4rem'}}>Description: {book.description}</Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default BookDetails