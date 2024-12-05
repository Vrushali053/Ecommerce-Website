import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Top1.css';




function Top7() {
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
"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQLdsxC_N8tWIWySxCNA9SgDBYg7eWSuAtbneVoQCaRrPDRJySnjMAaq8zZkV1hmI8dVlD9rEspWzXMcQzaZDK-ePsMuDbg02aymWCPXaHj5xyUBxCL2sAr&usqp=CAE",
"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTug44N_IgJYa_Z4o5QhNWwCPK9Tfj-5_E_Mr2U-Wow6Wo9D7MuwbupCucvoHWisR_FOT3IUhI7evKtZbdDJBr7XMU8NWBmwftYKLbpoBStpaNhihdRSo2i&usqp=CAE",
"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQebWyZIE9aFSk5pSrj9v2cv1s0UpoBhVmWm6ORhn4AhrN6aW4vkUUpdpjn08kkSCrvnvmZ1pK7lSeKi_BNmWa2LGF5htcK_M2uWlvVHNVDNwcCLsvhNj-F6g&usqp=CAE",
"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQebWyZIE9aFSk5pSrj9v2cv1s0UpoBhVmWm6ORhn4AhrN6aW4vkUUpdpjn08kkSCrvnvmZ1pK7lSeKi_BNmWa2LGF5htcK_M2uWlvVHNVDNwcCLsvhNj-F6g&usqp=CAE",
"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTTnYHxiWVkyDlU6J6dBzRrMGKzf4HCrspJliF0fzjRoJiL6HxGsuiu35hmedOiuD6jJ5Tb6SXgv_F0dSgwWyLJsZ-EvvkIn4P3UI5xJqomOLNOCw7SZiI-&usqp=CAE",
"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT-G9h6PDhHJ_ACDB6zmQVMTEAEPfjTDzJgaJkHSZIuI_ksz8jRgGPmeO6fh5f1pJtXKMSYNr_-os-vM1OC8bH57hcYQE2OHkl-5_iMB1Z7&usqp=CAE",
"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSDjVKBrELDbzZHcSEmBPisravCk1Fvk2KWDb6z2O9pgvqTimbmjJEIM7wn1XL1AOq2Bsu4rZlNWKyXjGXxt0zfKzd1MEF7HRuHX-Go5CoLES4Qkp5Jlcbz&usqp=CAE",
"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTug44N_IgJYa_Z4o5QhNWwCPK9Tfj-5_E_Mr2U-Wow6Wo9D7MuwbupCucvoHWisR_FOT3IUhI7evKtZbdDJBr7XMU8NWBmwftYKLbpoBStpaNhihdRSo2i&usqp=CAE",
  ];

  return (
    <div>
      <div className='cl'>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <img
        src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQLdsxC_N8tWIWySxCNA9SgDBYg7eWSuAtbneVoQCaRrPDRJySnjMAaq8zZkV1hmI8dVlD9rEspWzXMcQzaZDK-ePsMuDbg02aymWCPXaHj5xyUBxCL2sAr&usqp=CAE"
        alt="Description"
        style={{ width: '40%', height: '500px', marginRight: '0px' }}
      />
          <div className='colour'>
            <div className='description'>Mustard yellow crop top</div>
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

export default Top7;
