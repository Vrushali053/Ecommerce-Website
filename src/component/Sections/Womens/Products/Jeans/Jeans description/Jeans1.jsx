import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Jeans1.css';




function Jeans1() {
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
"https://getketchadmin.getketch.com/product/8905980191163/660/PTJN000009_1.jpg",
"https://getketchadmin.getketch.com/product/8905980191163/660/PTJN000009_3.jpg",
"https://getketchadmin.getketch.com/product/8905980191163/660/PTJN000009_2.jpg",
"https://getketchadmin.getketch.com/product/8905980191163/660/PTJN000009_4.jpg",
"https://getketchadmin.getketch.com/product/8905980191163/660/PTJN000009_5.jpg",
"https://getketchadmin.getketch.com/product/8905980191163/660/PTJN000009_6.jpg",
"https://getketchadmin.getketch.com/product/8905980191163/660/PTJN000009_2.jpg",
"https://getketchadmin.getketch.com/product/8905980191163/660/PTJN000009_4.jpg",
];

  return (
    <div>
      <div className='cl'>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <img
        src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQwNY-48COySw3awXW0n3LP5oFEPQ1GmBBVrc4c2AcGMMpBaf0n6xUCcGK1Bk_ihAB8xzaTE8w-Pq6pzB6ruS6drD8AFfhc-8B_ZXkClIxy"
        alt="Description"
        style={{ width: '40%', height: '500px', marginRight: '0px' }}
      />
          <div className='colour'>
            <div className='description'>Tokyo Talkies Women Regular</div>
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
                <option value="S">26</option>
                <option value="M">28</option>
                <option value="L">30</option>
                <option value="XL">32</option>
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

export default Jeans1;
