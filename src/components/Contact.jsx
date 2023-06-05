import React,{useEffect} from 'react'

const Contact = () => {

  useEffect(() => {
    document.title = "Book Store | Contact"
 }, []);

  return (
    <div>Contact</div>
  )
}

export default Contact