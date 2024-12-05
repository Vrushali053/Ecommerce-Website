import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Firsts.css';




function Seconds() {
  const [selectedSize, setSelectedSize] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleViewMore = () => {
    console.log(`Buying product with Size: ${selectedSize}`);
  };

  const handleImageClick = (src) => {
    setCurrentImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage('');
  };

  const images = [
"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQlx35SDNT_-LUftwzcSpRbqqTwNXrUXTyuJ3BI0GwyAednZ87WUdPh7DPH7R2q-5ti46_Ycwyya2FKaq-bmzxGKiYUmpNrjDOS_pzJkEo&usqp=CAE",
"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRtIfdTkGvgcTv-AQlu9KAO_IvsYrH34ElgpkYtqGAYFl_p6Od5JKjZmFoHBmcqySKK_xND_qcxAcYBOX4OmOPsJoJVU1MGEOWupvmzAaxFB0MM8kF96loe3A&usqp=CAE",
"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTFbQbVvdGaPgE7m23UY7Q7hBbSTmk8GltC5jmZ-JGEjdOqzmaHdn_PbQouFTt3m5mBJE8D3IyY9Ru6awjW1R_EqFZjIQ_AoyzIklq4Q1HK&usqp=CAE",
"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQg5FVXc7V9Ms3lLmzdhqfBw0-PowVEMKclGa1c-3G_eIV1kDpPjLyq8a52qQxBC0zPpThzYlCyn4TP4q1X9n6aV3L1q1dlACv-TbEjfVJs4i04VLFD0_-jbg&usqp=CAE",
"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ-aT17QdxsZzJEj2K7-rhZUdjsURKnGPCvC6Tg5ClyOxYGwnmok8F6ay8gRH0FOz2rhUv9AAkOQclDlP7I787ZaoqvafZl6yiU99AR3fN_&usqp=CAE",
"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQogQuPa2BXiNFWjqW153Y42C8V1P3OZ_18bhnjD4XItcpIziKeUu_N30ze3rsgXeKJjLOywlghIKgTDLfuJESgMXK_p1nDQn7zWwcLgy0X5c6P2H5mfmNM&usqp=CAE",
"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTFbQbVvdGaPgE7m23UY7Q7hBbSTmk8GltC5jmZ-JGEjdOqzmaHdn_PbQouFTt3m5mBJE8D3IyY9Ru6awjW1R_EqFZjIQ_AoyzIklq4Q1HK&usqp=CAE",
"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQlx35SDNT_-LUftwzcSpRbqqTwNXrUXTyuJ3BI0GwyAednZ87WUdPh7DPH7R2q-5ti46_Ycwyya2FKaq-bmzxGKiYUmpNrjDOS_pzJkEo&usqp=CAE",
];

  return (
    <div>
      <div className='cl'>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <img
        src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQlx35SDNT_-LUftwzcSpRbqqTwNXrUXTyuJ3BI0GwyAednZ87WUdPh7DPH7R2q-5ti46_Ycwyya2FKaq-bmzxGKiYUmpNrjDOS_pzJkEo&usqp=CAE"
        alt="Description"
        style={{ width: '40%', height: '500px', marginRight: '0px' }}
      />
          <div className='colour'>
            <div className='description'>Dillinger Men's Shirts</div>
            <div className='desc1'>Price Details</div>
            <p className='decs2'>
              Maximum Retail Price: Rs. 1899
              <p>Discount: 66% OFF</p>
              <p className='decs3'>Selling Price: Rs. 645</p>
            </p>
            
            <div className='size-selection'>
              <label htmlFor="size">Select Size:</label>
              <select
                id="size"
                value={selectedSize}
                onChange={(e) => handleSizeChange(e.target.value)}
              >
                <option value="">--Select Size--</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>

            <button
              className='view-moree'
              onClick={handleViewMore} 
              disabled={!selectedSize} 
            >
              <Link to="/Paynow">Buy Now</Link>
            </button>
          </div>
        </div>
      </div>


           <div className='Related-img'>
            Related Images
           </div>
      <div className='image-gallery'>
        <div className='gallery-inner'>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className='gallery-image'
              onClick={() => handleImageClick(src)} 
            />
          ))}
        </div>
      </div>

      
      {isModalOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={closeModal}>&times;</span>
            <img src={currentImage} alt="Zoomed" className='modal-image' />
          </div>
        </div>
      )}

      <div className='dec-img'>
     
      </div>
    </div>
  );
}

export default Seconds;
