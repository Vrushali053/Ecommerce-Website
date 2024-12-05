import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Top1.css';




function Top2() {
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
    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSnBqQMn0XflQu8tCmtCkaJwHe5w2P3bqBCIIvPWqR4tLuUqB3jEjhrOVk4lRc6sGjJLZTx2WTaglV6WvaefQ859KTXOi1ki8AAn4RXM_Y&usqp=CAE",
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRGlBOIVMxbGA_3xYAj9yzPqMvsFRH5xxve3kKkOnM_5PGvzvoHjjM4T0r3y5uCUPrqnbAI4LSo0reKD25q52IGvGD8JMCQc1X_9eS6FknejG5XCkqVtPHF&usqp=CAE",
    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRO70Q81QQmCzNVqboeDSK1iWmM8igMIvWZX0_DuLEWMsMPn7U9s3fpcErZdJFIbHBQsEDW_0XZMROXkBYJ0OnE7YZ1LrLEzrNXAq3qF7Y&usqp=CAE",
    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQFyF916QM28cYiO9qiflpSwXYWuEdPY9ZxAb8PV3c0hPo5OeKuvN0h7vwNEaAtjzB0sJzvnfAVyi0QuGRwIsqS7u_htDOFE9vPkfehk8A&usqp=CAE",
    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT_m_F2VtKXIVCBhmBtW4qCjR4sf6Zzp8YyYaMaKfSj7sk7bSthwcupv2YmnVAiLghuJLSUxyI6h0gP785yWgPWdajZcCGDsP2nbfuZi3j4&usqp=CAE",
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRGlBOIVMxbGA_3xYAj9yzPqMvsFRH5xxve3kKkOnM_5PGvzvoHjjM4T0r3y5uCUPrqnbAI4LSo0reKD25q52IGvGD8JMCQc1X_9eS6FknejG5XCkqVtPHF&usqp=CAE",
    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQFyF916QM28cYiO9qiflpSwXYWuEdPY9ZxAb8PV3c0hPo5OeKuvN0h7vwNEaAtjzB0sJzvnfAVyi0QuGRwIsqS7u_htDOFE9vPkfehk8A&usqp=CAE",
    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS58pxXaURtvbFieUt0dvlCsVTIX3ER-zb6HAJxTW1HioawCWjWVqmekPS6azzlrxO1xNFvDTv8iMu6_TafagYVqRhlxEODTIS05S38zxI&usqp=CAE",
];

  return (
    <div>
      <div className='cl'>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <img
        src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSnBqQMn0XflQu8tCmtCkaJwHe5w2P3bqBCIIvPWqR4tLuUqB3jEjhrOVk4lRc6sGjJLZTx2WTaglV6WvaefQ859KTXOi1ki8AAn4RXM_Y&usqp=CAE"
        alt="Description"
        style={{ width: '40%', height: '500px', marginRight: '0px' }}
      />
          <div className='colour'>
            <div className='description'>	
            DressBerry Round Neck</div>
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

export default Top2;
