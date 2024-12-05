import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Jeans1.css';




function Jeans5() {
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
"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSpm3qhZ_4ZqD4jHGSplcTwCaQhexUqwSkneO5Y4_ti8716C1Az7bkvYn1KS74PLBuYv1bCtXw-WcAu0WczgHSvmOmCLTroB4zuvSPk0mwJ&usqp=CAE",
"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRyJg3dLwTl1wJPt-1HNvjxz7-c4SlVWQV6BhAVMYnP2d8Zn-ptxo43-RklM615PdtdFKWhV9GnQFETvBhWlu5MJ-g4u4zTbsH0aqIj-A&usqp=CAE",
"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQgNMLVHYe9J-Gz_71f0FkJvmTQGV0X0005rK6zpC1P2JZ41dL7MN454pAh3Hnn3jOvfJWxnp58kdHoS3VKkqBQ-TzjPp-CpID045jC-HWqNsvkGhcwXf2v&usqp=CAE",
"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRok4xafQktEvbG5uMMiPqGd04H1aX34s14USljc04uXYpvtt_3OwQ2SYjOFCSdF4t8BT0XczjBiZHewQ4jfy0OYdWxRojk-4jMsnOUFWw&usqp=CAE",
"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS-44PYdWJQMx8zs1kG6MULXajS8RAo7GS8YY6b6Qh16m6XfWWvMpAblb45pdQkrDVlpPRksHhBM8TICAw_gI6IejIUYHfQ_5KjzpQeaoIL&usqp=CAE",
"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRyJg3dLwTl1wJPt-1HNvjxz7-c4SlVWQV6BhAVMYnP2d8Zn-ptxo43-RklM615PdtdFKWhV9GnQFETvBhWlu5MJ-g4u4zTbsH0aqIj-A&usqp=CAE",
"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQgNMLVHYe9J-Gz_71f0FkJvmTQGV0X0005rK6zpC1P2JZ41dL7MN454pAh3Hnn3jOvfJWxnp58kdHoS3VKkqBQ-TzjPp-CpID045jC-HWqNsvkGhcwXf2v&usqp=CAE",
"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRok4xafQktEvbG5uMMiPqGd04H1aX34s14USljc04uXYpvtt_3OwQ2SYjOFCSdF4t8BT0XczjBiZHewQ4jfy0OYdWxRojk-4jMsnOUFWw&usqp=CAE",
];

  return (
    <div>
      <div className='cl'>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <img
        src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSpm3qhZ_4ZqD4jHGSplcTwCaQhexUqwSkneO5Y4_ti8716C1Az7bkvYn1KS74PLBuYv1bCtXw-WcAu0WczgHSvmOmCLTroB4zuvSPk0mwJ&usqp=CAE"
        alt="Description"
        style={{ width: '40%', height: '500px', marginRight: '0px' }}
      />
          <div className='colour'>
            <div className='description'>Cotton High-Rise Jeans</div>
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

export default Jeans5;
