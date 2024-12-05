import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Firsts.css';




function Firsts() {
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
"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQInZ_0nwGbE7QxmYNUVSH1TGY0PcY-OX-5HYdLZ7zcayagcSILvad61esxko-1zIi-EZgR-h9vYe71VN4G_7mJtlaNyUFFNdQyXJR92WdA&usqp=CAE",
"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQGgBuumosgT_e6rbP4p6beQ3nCBjhiiVT7MSKgL1XOWJznDIMzne5bCMvC0_nzpE5dwNRqw6BE7PF-TTs05ZUFRfyqWPamStnXY9DpAqnn&usqp=CAE",
"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQtQA-YPOaXEf5jkXCW-r4quTYbevNXHnGiZ4F4EniabXjaoNuAZH4pk9igCFMvuin_aLAklrElchIZJNo6AhN9lTJkvb23wjbN-7U4KNs&usqp=CAE",
"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQtw2KHDY2HCdgh8eUYi4N9HCNQwK-gjb8Ky_4rSxY-Nb-LpOqEm-Fo9vwqaQk5lJg0usYZoFkCwf7SBSnxMd7drmocY2gmkllH6A1VOUs4di14d-276DXGvg&usqp=CAE",
"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRKfP3gQj7C5skssKJuD7aqyGL4Q-17BGl14Fj9pIOorf3QwUxNjKkmFdtXVsULlAUEkuzDAmA1eORmpv3QDOD5UZ1O5MhN_l6koezm2_EV&usqp=CAE",
"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRZz2Kk9AsQtaoVxo9PTqTUtAreomHFnpGKeb9ynG6BrvOVE0HYYx7PCCvAfr3ZVL8WYCtWIxANLT25rc6nqeNM8IqviLfZLHt3pqOw4CI&usqp=CAE",
"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRnscA-Tn8n2lS2LNG4_c7gkxIhsGlzFM4WBgn98Bbf_ZQy-iqYWJqQG1UXYL-AJZwcURz6V3Yz3nIw4jlanmQQLPTbpQJ498ig9THEnCY&usqp=CAE",
"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcShkxSkCbyqrHVNY6rldM6wsLO_aCHrIt26lfBvsWls2iuRFz5YZQ-3TAD63Adkc9YdYyj0ccX66esmhV-vaRQiu822Y9i34C-B3OzixOLm&usqp=CAE",
  ];

  return (
    <div>
      <div className='cl'>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <img
        src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQInZ_0nwGbE7QxmYNUVSH1TGY0PcY-OX-5HYdLZ7zcayagcSILvad61esxko-1zIi-EZgR-h9vYe71VN4G_7mJtlaNyUFFNdQyXJR92WdA&usqp=CAE"
        alt="Description"
        style={{ width: '40%', height: '500px', marginRight: '0px' }}
      />
          <div className='colour'>
            <div className='description'>Checkered shirt</div>
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

export default Firsts;
