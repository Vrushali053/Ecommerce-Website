
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Kids.css';
import kid1 from '../../../assets/Images/kid1.jpg'
import kid2 from '../../../assets/Images/kid2.png'
import kid3 from '../../../assets/Images/kid3.webp'
import k1 from '../../../assets/Images/k1.webp'
import k5 from '../../../assets/Images/k5.webp'
import k3 from '../../../assets/Images/k3.webp'
import k4 from '../../../assets/Images/k4.webp'

// import about from '../../../assets/Images/aboutimg.webp';


const images = [kid1, kid2, kid3];

function Kids() {
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
      <img src={images[currentIndex]} alt="Women" className="kidimg" />
      <span onClick={prevImage} className="nav-icon prev-icon">&#10094;</span>
      <span onClick={nextImage} className="nav-icon next-icon">&#10095;</span>
      <div className='section'>Kids Were</div>
      <div className='main-container'>
        <Link to="/kurta" className='image-containerr'>
          <img src={k1} alt='Hero 1' className='girlimages' />
          <p className='image-description'><Link to="/Kurta">Baby Set</Link></p>
        </Link>
        <Link to="/jeans" className='image-containerr'>
          <img src={k5} alt='Hero 2' className='girlimages' />
          <p className='image-description'>Jumper</p>
        </Link>
        <Link to="/top" className='image-containerr'>
          <img src={k3} alt='Hero 3' className='girlimages' />
          <p className='image-description'>Jacket</p>
        </Link>
        <Link to="/dress" className='image-containerr'>
          <img src={k4} alt='Hero 4' className='girlimages' />
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

export default Kids;
