import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='Footer'>CopyRight &copy; {currentYear}</footer>
  )
}

export default Footer;