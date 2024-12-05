import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Top1.css';




function Dress1() {
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
"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTtcuBqerej9SslADOBnrzd0sFTAQ_Rkx5x_UA6uv7EVmIsKU-LNPakDiFfEi7rbJBjWdpsLbiAOzW_BbNvj2X-o6O94JhkcNuC23ao4F1bIErTJCUlayiB3w",
"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSqtWcZ5J5HrNWbJU6flRMN83Ryo45dTdlGMctzueNXuyXhLdMoi2O4NFJrtqOQ_7lRWhtpcYMa9v59oT97OzzT-xSbKWonT3M9bBpfID8",
"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSpDAM5ZLIK3tKGob8P22il7jrEasah8IMWUEiUd3AYbCDt3g-clOZT3YnYHPuJC7KIRp0s5VgKoglOK2LJ9WAlCE07ahiEo802BP1gZa0Z0eeDlJZd5kd70g",
"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQHgujtTCYvsfptYvxxgkSmcdOKY8Y-pdzK5vXc57JDBq1t3Q6qCkO9dlpv_qd14IyOb5-16nr_3O473QzyZpLjRg1xXAK6Te8rgI4arAyaCTCnG6uZacSguQ",
"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT4mWltWjhZXLqZLadKu1RmgeOQ3S2s5Te2HaaK4LRL7J_pjS0TLFcuNGvnmfEN55wuJBhXBJyL0TfdSQwzJuJXnNgzBwQ5iGfBLqQGo8y9lKMD8SeQHFUe",
"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ7iCv5AH9uKtF0OCdC66BssqOJtqMOW1D4ZShKDVVXLO4BXH7lvId3LDzrHgW6-24F4iIcTr5ArJgKfu5H43DDBHQvKhNWaaKYV1gF_YI",
"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQHgujtTCYvsfptYvxxgkSmcdOKY8Y-pdzK5vXc57JDBq1t3Q6qCkO9dlpv_qd14IyOb5-16nr_3O473QzyZpLjRg1xXAK6Te8rgI4arAyaCTCnG6uZacSguQ",
"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT4mWltWjhZXLqZLadKu1RmgeOQ3S2s5Te2HaaK4LRL7J_pjS0TLFcuNGvnmfEN55wuJBhXBJyL0TfdSQwzJuJXnNgzBwQ5iGfBLqQGo8y9lKMD8SeQHFUe",
];

  return (
    <div>
      <div className='cl'>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <img
        src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTtcuBqerej9SslADOBnrzd0sFTAQ_Rkx5x_UA6uv7EVmIsKU-LNPakDiFfEi7rbJBjWdpsLbiAOzW_BbNvj2X-o6O94JhkcNuC23ao4F1bIErTJCUlayiB3w"
        alt="Description"
        style={{ width: '40%', height: '500px', marginRight: '0px' }}
      />
          <div className='colour'>
            <div className='description'>Regular Smart Casual Top</div>
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

export default Dress1;
