import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Top1.css';




function Top4() {
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
"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTB5E_kN1EkmKFV2tyhsFp-PyhfBNBnCQDx87UKy1lwVjQ9T3XdyjLc7hyMZVbzJD32uV0_TfjrdOOh1NmOBl_nzjpm9QzJSp5MIntjpxI&usqp=CAE",
"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQSB6xHnk33DBLPuKnlqLyaQesQXcLqVCymAEYeyUprvywn-rWUyBA4fXIKeSbj4zpCGYAfdBBQ7a6sMlwQ2VHyHs5ZwKicDSuhY-IgmelZGLVGV78gKbhD_w&usqp=CAE",
"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTOk4reCISQgObt-r89ahGx7jfYnHb689a32iNFf3oSzZrCYROQEUOuuRAHRCWaZjvFsBaXDBngOM6heEmsyGmx_AcMtCJFtvjSYWiUSSDkOiedYI4R1PNcTg&usqp=CAE",
"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSK12_I0BmJLQhmc8L5CiOClMeHUiC3xFg0YYnOnGG-rRrd6O47aZBCWZhzK-1defXKxvIZQmAh_OTo5jLNFmbIMmF2vsyskL4WYXkg7ls&usqp=CAE",
"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTvPdv8F_AjVh2hm4KpJpfTaBGHwWt8lFOq3HcUPHwcbENha75mDlaxfxMuBwLbjIUGJlIYPuCW1bxBex-g4GkbzwgThHBlF_HZOwimh1Ix&usqp=CAE",
"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ671OeKVO3HLivgDNoHXcPQVoevlsgBDg6P1wPfNsfxfKM56mLPGs0Dv0nN4lZjh721aFfXY2Qk90RboS9NbyZqchSM2Adh3lhamSdEZTfoBjDzIEDEM2CyQ&usqp=CAE",
"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQM4B5CxctXBoHJEMfgR8ydvmyW4BG_PFgXQKZs9Mi8X2zryvoXJzMHRjtopw-T7VWFksuA2hrXbtnzLvKrO_yShMTsf8gKrUu7EMlNY9A&usqp=CAE",
"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSK12_I0BmJLQhmc8L5CiOClMeHUiC3xFg0YYnOnGG-rRrd6O47aZBCWZhzK-1defXKxvIZQmAh_OTo5jLNFmbIMmF2vsyskL4WYXkg7ls&usqp=CAE",

  ];

  return (
    <div>
      <div className='cl'>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <img
        src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTB5E_kN1EkmKFV2tyhsFp-PyhfBNBnCQDx87UKy1lwVjQ9T3XdyjLc7hyMZVbzJD32uV0_TfjrdOOh1NmOBl_nzjpm9QzJSp5MIntjpxI&usqp=CAE"
        alt="Description"
        style={{ width: '40%', height: '500px', marginRight: '0px' }}
      />
          <div className='colour'>
            <div className='description'>Brown regular top </div>
            <div className='desc1'>Price Details</div>
            <p className='decs2'>
              Maximum Retail Price: Rs. 699
              <p>Discount: 66% OFF</p>
              <p className='decs3'>Selling Price: Rs. 399</p>
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

export default Top4;
