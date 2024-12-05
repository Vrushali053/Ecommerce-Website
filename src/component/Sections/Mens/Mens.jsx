


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Mens.css';
import menimg1 from '../../../assets/Images/menimg1.jpg';
import menimg from '../../../assets/Images/menimg.webp';
import menimg2 from '../../../assets/Images/menimg2.webp';
import men from '../../../assets/Images/men.webp'
import men1 from '../../../assets/Images/men1.webp'
import men2 from '../../../assets/Images/men2.webp'
import men3 from '../../../assets/Images/men3.webp'

// import about from '../../../assets/Images/aboutimg.webp';


const images = [menimg1, menimg, menimg2];

function Mens() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='image-container'>
      <img src={images[currentIndex]} alt="Women" className="menimg" />
      <span onClick={prevImage} className="nav-icon prev-icon">&#10094;</span>
      <span onClick={nextImage} className="nav-icon next-icon">&#10095;</span>
      <div className='section'>Mens Were</div>
      <div className='main-container'>
        <Link to="/Shirt" className='image-containerr'>
          <img src={men} alt='Hero 1' className='girlimages' />
          <p className='image-description'><Link to="/Shirt">Shirt</Link></p>
        </Link>
        <Link to="/" className='image-containerr'>
          <img src={men1} alt='Hero 2' className='girlimages' />
          <p className='image-description'>Jeans</p>
        </Link>
        <Link to="/top" className='image-containerr'>
          <img src={men2} alt='Hero 3' className='girlimages' />
          <p className='image-description'>T-Shirt</p>
        </Link>
        <Link to="/dress" className='image-containerr'>
          <img src={men3} alt='Hero 4' className='girlimages' />
          <p className='image-description'>Hoodie</p>
        </Link>
        {/* <Link to="/saree" className='image-containerr'>
          <img src={saree} alt='Saree' className='girlimages' />
          <p className='image-description'>Saree</p>
        </Link>
        <Link to="/gaun" className='image-containerr'>
          <img src={Gaun} alt='Gaun' className='girlimages' />
          <p className='image-description'>Gaun</p>
        </Link>
        <Link to="/lehenga" className='image-containerr'>
          <img src={Lehenga} alt='Lehenga' className='girlimages' />
          <p className='image-description'>Lehenga</p>
        </Link>
        <Link to="/banjara" className='image-containerr'>
          <img src={Banjara} alt='Banjara' className='girlimages' />
          <p className='image-description'>Banjara</p>
        </Link> */}
      </div>
      <div className='about'>
        {/* About Us */}
        {/* <div className='cont1'>
          <div className='image-with-text'>
            <img src={about} alt='about' className='aboutimg' />
            <div className='overlay-text'>
              <p>About Us</p>
              <p>Welcome to Shopper, where we celebrate the strength, individuality,</p>
              <p> and style of women everywhere...</p>
              
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Mens;
