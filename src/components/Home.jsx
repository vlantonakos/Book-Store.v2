import React, {useEffect} from 'react'
import book from '../assets/book-removebg-preview.png'
import books from '../assets/books-removebg-preview.png'
import { Box, Typography } from '@mui/material'


const Home = () => {
  useEffect(() => {
    document.title = "Book Store | Home"
 }, []);

  return (
    <>
    <Box sx={{display:'flex',width:'100%',height:'100%'}}>
      <Box sx={{display:'grid',pt:'5%',pl:'5%'}}>
        <Typography variant='h2' sx={{pt:'2%',pb:'2%',fontFamily:'Lato'}}>
          Book Store
        </Typography>

        <Typography variant='h6' sx={{pt:'2%',fontFamily:'Libre Baskerville',fontWeight:'400',fontSize:'1.4rem'}}>
          Welcome to our virtual book store, where literary journeys begin and imaginations take flight.
          <br />
          We invite you to explore a world of words that will transport you to captivating realms, introduce you to unforgettable characters, and ignite your passion for reading.
          <br />
          Discover the joy of reading with us, and let the power of books open new chapters in your life. 
          <br />
          Welcome to a realm where stories come alive.
        </Typography>

      </Box>
      <img style={{marginLeft: '15%'}} src={book} alt='book'/>
    </Box>

    <Box sx={{display:'grid',pt:10,pb:0,mb:0,textAlign:'center'}}>
      <img src={books} alt='books' style={{width:'100vw',height:'50vh'}} />
      <Box sx={{pt:0,mt:0,width:'100%',backgroundColor:'#1a2a6c'}}>
        <Typography variant='h6' sx={{color:'white',fontFamily:'Libre Baskerville',fontWeight:'200',fontSize:'1.4rem'}}>
          Book Store by Vlanto
        </Typography>
      </Box>
    </Box>
    </>
  )
}

export default Home