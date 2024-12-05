import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Women.css';
import womenimg1 from '../../../assets/Images/s4.webp';
import womenimg from '../../../assets/Images/s2.jpeg';
import womenimg2 from '../../../assets/Images/s3.jpeg';
import girl from '../../../assets/Images/ws1.webp';
import girl1 from '../../../assets/Images/ws2.webp';
import girl2 from '../../../assets/Images/ws3.jpg';
import girl3 from '../../../assets/Images/ws4.webp';
import about from '../../../assets/Images/aboutimg.webp';
import saree from '../../../assets/Images/saree.webp';
import Gaun from '../../../assets/Images/gaun.jpg';
import Lehenga from '../../../assets/Images/lehenga.jpg';
import Banjara from '../../../assets/Images/Banjara.jpg';

const images = [womenimg1, womenimg, womenimg2];

function Women() {
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
      <img src={images[currentIndex]} alt="Women" className="womenimg" />
      <span onClick={prevImage} className="nav-icon prev-icon">&#10094;</span>
      <span onClick={nextImage} className="nav-icon next-icon">&#10095;</span>
      <div className='section'>Womens Were</div>
      <div className='main-container'>
        <Link to="/kurta" className='image-containerr'>
          <img src={girl} alt='Hero 1' className='girlimages' />
          <p className='image-description'><Link to="/Kurta">Kurta</Link></p>
        </Link>
        <Link to="/jeans" className='image-containerr'>
          <img src={girl1} alt='Hero 2' className='girlimages' />
          <p className='image-description'>Jeans</p>
        </Link>
        <Link to="/top" className='image-containerr'>
          <img src={girl2} alt='Hero 3' className='girlimages' />
          <p className='image-description'>Top</p>
        </Link>
        <Link to="/dress" className='image-containerr'>
          <img src={girl3} alt='Hero 4' className='girlimages' />
          <p className='image-description'>Dress</p>
        </Link>
        <Link to="/saree" className='image-containerr'>
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
        </Link>
      </div>
      <div className='about'>
        {/* About Us */}
        <div className='cont1'>
          <div className='image-with-text'>
            {/* <img src={about} alt='about' className='aboutimg' /> */}
            <div className='overlay-text'>
              {/* <p>About Us</p>
              <p>Welcome to Shopper, where we celebrate the strength, individuality,</p>
              <p> and style of women everywhere...</p> */}
              {/* Truncated for brevity */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Women;
