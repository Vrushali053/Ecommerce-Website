import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Top1.css';




function Top8() {
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
"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT6AMUbTT_PAGZdBJBWbw3KdYf4dg_avi1oSUEIz865IjqRyERfreGWbvy8XWcfuEu-yi1JC8q82z4Dk4Luo9_MFk--ynoxShRRjodNGrAh&usqp=CAE",
"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSPaI60Ise1T7I04qoBXvPPpltU5I99ZJQW6mpDEzvXISst6_USMqI536cOvzyX0891rMHEg5ZkzRTcEj0XVmJ6ZlSx9_CtDHztjdWESGG8cm8pJxp3SNMT&usqp=CAE",
"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT4w2TDrOgh1wDMzIpnwdFY6XJ79DFeBsLpqsGfBYgKNGUgg0sqjBpvgfODUg-01uE-cXA-1-iPaa3-ccFDmf68eZCa--akg2Nfr3yoH78&usqp=CAE",
"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSNMskx9mWQz8bvLCh5Mn7meQnxmoJLItlR4OLRIxcBNIeb7kwlc36QPyuy7Dind6h9XR2WRPPoDcFWqQel8vk200cLSLWa8wU2djIIprEF&usqp=CAE",
"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSHkFGXbm_1HCZQA5vAQL-jyxmilQt36Liq5T3k9aoVSxgMZVRy1yKiZsL5xc_6VJFo0XWO0qu2ZrFf1Oc9lOem6QgGl1xJ0f-d-pJwK7I&usqp=CAE",
"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSiuOJXTXeHdzi-qemgsOvQidK1BkrK9NzC5_Dw3NSaDtZyZ-0NCVlaLTeoSx0hvA9itkO4A_Nmnd610Fu8t788wN5E8_To2oeMQ9Au2JvnhMklyDaGXmB-wQ&usqp=CAE",
"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT6AMUbTT_PAGZdBJBWbw3KdYf4dg_avi1oSUEIz865IjqRyERfreGWbvy8XWcfuEu-yi1JC8q82z4Dk4Luo9_MFk--ynoxShRRjodNGrAh&usqp=CAE",
"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT4w2TDrOgh1wDMzIpnwdFY6XJ79DFeBsLpqsGfBYgKNGUgg0sqjBpvgfODUg-01uE-cXA-1-iPaa3-ccFDmf68eZCa--akg2Nfr3yoH78&usqp=CAE",
  ];

  return (
    <div>
      <div className='cl'>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <img
        src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT6AMUbTT_PAGZdBJBWbw3KdYf4dg_avi1oSUEIz865IjqRyERfreGWbvy8XWcfuEu-yi1JC8q82z4Dk4Luo9_MFk--ynoxShRRjodNGrAh&usqp=CAE"
        alt="Description"
        style={{ width: '40%', height: '500px', marginRight: '0px' }}
      />
          <div className='colour'>
            <div className='description'>	
            Black Tshirt for women </div>
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

export default Top8;
