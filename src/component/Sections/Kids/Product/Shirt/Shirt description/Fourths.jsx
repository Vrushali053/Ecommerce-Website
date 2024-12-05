import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Firsts.css';




function Fourths() {
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
"https://houseofaldeno.com/cdn/shop/files/GIPAL.jpg?v=1713787202&width=493",
"https://houseofaldeno.com/cdn/shop/files/Aldeno_March24_1822.jpg?v=1713787202&width=493",
"https://houseofaldeno.com/cdn/shop/files/Aldeno_March24_1844.jpg?v=1713787202&width=493",
"https://houseofaldeno.com/cdn/shop/files/Aldeno_March24_1834.jpg?v=1713787202&width=493",
"https://houseofaldeno.com/cdn/shop/files/Aldeno_March24_1839.jpg?v=1713787202&width=493",
"https://houseofaldeno.com/cdn/shop/files/Aldeno_March24_1844.jpg?v=1713787202&width=493",
"https://houseofaldeno.com/cdn/shop/files/Aldeno_March24_1850.jpg?v=1713787202&width=493",
"https://houseofaldeno.com/cdn/shop/files/GIPAL.jpg?v=1713787202&width=493",
];

  return (
    <div>
      <div className='cl'>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <img
        src="https://houseofaldeno.com/cdn/shop/files/GIPAL.jpg?v=1713787202&width=493"
        alt="Description"
        style={{ width: '40%', height: '500px', marginRight: '0px' }}
      />
          <div className='colour'>
            <div className='description'>Oxford Magenta Casual Shirt</div>
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

export default Fourths;
