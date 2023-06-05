import React,{useEffect} from 'react'
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import book1 from '../assets/book1.png'
import book2 from '../assets/book2.png'
import book3 from '../assets/book3.png'
import book4 from '../assets/book4.png'
import { useNavigate } from "react-router-dom";


const Books = () => {
  const books = [
    { id: 1, title: 'The Puppeteers: The People Who Control the People Who Control America', image:`${book1}` },
    { id: 2, title: 'Happy Place', image: `${book2}` },
    { id: 3, title: 'The Book of Charlie: Wisdom from the Remarkable American Life of a 109-Year-Old Man', image: `${book3}` },
    { id: 4, title: `Oh, the Places You'll Go!`, image: `${book4}` },
  ];
  const navigate = useNavigate();


  useEffect(() => {
    document.title = "Book Store | Books"
 }, []);

  return (
    <Grid container spacing={2} sx={{pt:'5vh',height:'100vh'}}>
      {books.map((book) => (
        <Grid item xs={6} sm={3} md={2} key={book.id}>
          <Card onClick={() => navigate(`/books/${book.id}`)} sx={{pt:0,mt:0,borderRadius:'10px',"&:hover":{boxShadow: 20,borderRadius:'12px'}}}>
            <CardMedia component="img" image={book.image} alt={book.title} />
            <CardContent>
              <Typography variant="h6" component="div">
                {book.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Books