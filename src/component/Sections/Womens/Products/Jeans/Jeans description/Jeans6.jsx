import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Jeans1.css';




function Jeans6() {
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
"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT8hYMhbxFXbHfw8n3FKVdQyDFv8rOiqPWPpoJVxms9uyQ25nc88SVcyTWLhBmiyf5YvlhmpgAU_3kaBZA-rkFapF-qAel68ah-pOswcsQs&usqp=CAE",
"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRdvTx5XkoGhK-uEE6HNIB6uOh5oigtBV_Yv6nYjPIgNr1P2bxUfZNj-NKXT1rPUSgUzeJSOrrSCVP1uBOJEG_XrJHTqsU5RVNrS24x9c6lsTiEZzkE1gHjRg&usqp=CAE",
"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTTT9G21Q37N1E7y-V249qE9VXgDhuUxXUJR-AuEmtqndhr-5ZmA3UK4vRAqC-Hck1gStRejS2z2We4YaUJq8zkDpM9a6XvaT7CH29OK_E&usqp=CAE",
"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTeVW9yLLsiyRPC6Yp8NfG62DmyNeo_Ii4ppQNOX4ZumsDO379SiVUgLaHS9ewwkO6h8gr8qHMr1LJTNmroh6MRgXJyPlsG6qD0tu6iRCF7cAwx81Dp4F5whw&usqp=CAE",
"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTa97pnkj8t9ZcLtrFNFuopQAaQhDBzP3WI-2KvtP4aHOIOrxGZXNJAokXPG71eJZdOEk6P1G7jUVBQPkoyRYNnCr2zQia5tvn3FhNwlBoNxDGrBbgFAxqj&usqp=CAE",
"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQsX1drtr_pln3gTqZ_O8S8Xamcx1jy4MRyNljWeZr0YQ_V25xCyKl1nkHG3XuaYym_6vD_HC3BHD2AVZNXb2CmsqoUkWzzEZaf0nReQox15O3BfAmjXN6L&usqp=CAE",
"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTeVW9yLLsiyRPC6Yp8NfG62DmyNeo_Ii4ppQNOX4ZumsDO379SiVUgLaHS9ewwkO6h8gr8qHMr1LJTNmroh6MRgXJyPlsG6qD0tu6iRCF7cAwx81Dp4F5whw&usqp=CAE",
"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT8hYMhbxFXbHfw8n3FKVdQyDFv8rOiqPWPpoJVxms9uyQ25nc88SVcyTWLhBmiyf5YvlhmpgAU_3kaBZA-rkFapF-qAel68ah-pOswcsQs&usqp=CAE",

];

  return (
    <div>
      <div className='cl'>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <img
        src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT8hYMhbxFXbHfw8n3FKVdQyDFv8rOiqPWPpoJVxms9uyQ25nc88SVcyTWLhBmiyf5YvlhmpgAU_3kaBZA-rkFapF-qAel68ah-pOswcsQs&usqp=CAE"
        alt="Description"
        style={{ width: '40%', height: '500px', marginRight: '0px' }}
      />
          <div className='colour'>
            <div className='description'>	
            DressBerry Women Slouchy Fit Jeans</div>
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

export default Jeans6;
