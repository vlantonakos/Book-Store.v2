import React,{useEffect} from 'react'

const About = () => {

  useEffect(() => {
    document.title = "Book Store | About"
 }, []);

  return (
    <div>About</div>
  )
}

export default About