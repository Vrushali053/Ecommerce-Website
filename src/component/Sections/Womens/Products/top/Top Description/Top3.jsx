import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Top1.css';




function Top3() {
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
    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRoFisQk-P39wvGkSqiLjpiPRPg18OkD7lUK1jQW4Ai0DEe5wvYPypUO8j_eDCd3DaWxaCcaKcCsYN0DLIEptRE_n7LFOs25Z-CUolGXPK_SZNRRzzS9GFTTw&usqp=CAE",
    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSA9vFpTQm9eo6le8LcImTwmmUL1GYjfbVWu-rvTW2vDnsjiLHF5JYj8Ub4SCyfqLChs7NJfpfQbZzR4W_rCZ-pTGWaB3U2Ba1Kkbi3p7I&usqp=CAE",
    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRkYzfFynOINiAMBVXHcSNsIcQ_EJVQHaVaRi8i3cbieovzZOkl524AomSLJZgMqaTF_6m5IpMBx6CVeOu7IIjS8zvKB1UbgMgv4AXVRQs5mSkvqB5gOA&usqp=CAE",
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT2qFn6CNL0LnF4_dt_fLvQIRo8OsjiGGZqoEygoSiTsIP0UANxl8GKmWGWFkWZimjBT3XfLdMtZk32hxf5-pg8ZAp0J1-MOTsm4rZk2kSEOML8XJeYdmOh&usqp=CAE",
    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSA9vFpTQm9eo6le8LcImTwmmUL1GYjfbVWu-rvTW2vDnsjiLHF5JYj8Ub4SCyfqLChs7NJfpfQbZzR4W_rCZ-pTGWaB3U2Ba1Kkbi3p7I&usqp=CAE",
    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTQGyT75OPYR5fvaFmb4gzOSZ8wd-eshfm_JhRYF_6YwHjdpu9XEF83xwU0-1G3iGVibqV5sNJEM0pjG1cLblYpuF9A_YUjEbnE3c2wAZKU7x36HDo-09lbCg&usqp=CAE",
    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRkYzfFynOINiAMBVXHcSNsIcQ_EJVQHaVaRi8i3cbieovzZOkl524AomSLJZgMqaTF_6m5IpMBx6CVeOu7IIjS8zvKB1UbgMgv4AXVRQs5mSkvqB5gOA&usqp=CAE",
    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSA9vFpTQm9eo6le8LcImTwmmUL1GYjfbVWu-rvTW2vDnsjiLHF5JYj8Ub4SCyfqLChs7NJfpfQbZzR4W_rCZ-pTGWaB3U2Ba1Kkbi3p7I&usqp=CAE"
];

  return (
    <div>
      <div className='cl'>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <img
        src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRoFisQk-P39wvGkSqiLjpiPRPg18OkD7lUK1jQW4Ai0DEe5wvYPypUO8j_eDCd3DaWxaCcaKcCsYN0DLIEptRE_n7LFOs25Z-CUolGXPK_SZNRRzzS9GFTTw&usqp=CAE"
        alt="Description"
        style={{ width: '40%', height: '500px', marginRight: '0px' }}
      />
          <div className='colour'>
            <div className='description'>Black crop cinched waist top</div>
            <div className='desc1'>Price Details</div>
            <p className='decs2'>
              Maximum Retail Price: Rs. 500
              <p>Discount: 66% OFF</p>
              <p className='decs3'>Selling Price: Rs. 350</p>
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

export default Top3;
