import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Jeans1.css';




function Jeans4() {
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
"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ9E0w_Xtmbc1qriyYTzaEos4lt7HksQFV9qOXtiJ7kGZLQIphV8GvTQcO2BMIcvShcHpRd5PDe8keTPw7OYNBsD9iOfCqp6JJPTidLC7hHzzA_uCl-kQ2x&usqp=CAE",
"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQx_kZLFdxjWIoz0sHQ8aX3VJBJmMnhIKokYGxRwk6o6vVuOvPFMMikUGRJrG3PUSh1auI99mRybZBWESs2iWi3_lkT2ZaYaR4r8owpLivDTx_0yFaZZcoxDA&usqp=CAE",
"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSOdezI28eodzv4bc5g61s8F2ugKkvnr_EBfn3nFHHW6ex4Sg5z-Uy8GdfCeAYc9PCY7oaH8pm0UYK8dOEBIOhG3cyhf9XzsrsUD1tByyq2KdTAd8KFOGLmTA&usqp=CAE",
"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR6BJ2WKB0GiIHPnS0xvBfm_68T65h9XBUHgjmgRnIm-sgQuBPFK2ohTWibwFG859zFzjpWI4U0RX3_SUb7cyO-qIZg9DXe8T4LOqtPZawxe8aGy31_ElKNUQ&usqp=CAE",
"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJEA9h6XboA5mNnJg39ElqJxTI9GY3Bgzikd-VPWp0OG4PRIe91_nDb-SjYS8l8RVdEcXXebbiHnMtZu_TWpzRnCQzlG9GImeacowtmam07YGbydLGmOHF&usqp=CAE",
"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJPXVPuB1oNARgQSPEaNfCVR6fyleBtRSM_frCEPO03PNgK_tXP4l5jH-xY-DASF2GK7-k1WdVThAn7kABFyI1Z9b0Ot-aMzMYRcJAIWSHEMeVMjkDdvDjqQ&usqp=CAE",
"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ9E0w_Xtmbc1qriyYTzaEos4lt7HksQFV9qOXtiJ7kGZLQIphV8GvTQcO2BMIcvShcHpRd5PDe8keTPw7OYNBsD9iOfCqp6JJPTidLC7hHzzA_uCl-kQ2x&usqp=CAE",
"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRrinOpJkXWpz8X4P8_-NNqTVnIjC5sCPfV9kE6HfbXRPKRGAzSEdtBjwFNb4oASe8YsK8S4xXB6YCD2aBmh6tXzXsdGV_8WjFFJMkM57E&usqp=CAE",
];

  return (
    <div>
      <div className='cl'>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <img
        src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQx_kZLFdxjWIoz0sHQ8aX3VJBJmMnhIKokYGxRwk6o6vVuOvPFMMikUGRJrG3PUSh1auI99mRybZBWESs2iWi3_lkT2ZaYaR4r8owpLivDTx_0yFaZZcoxDA&usqp=CAE"
        alt="Description"
        style={{ width: '40%', height: '500px', marginRight: '0px' }}
      />
          <div className='colour'>
            <div className='description'> Light Fade Stretchable Jeans</div>
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

export default Jeans4;
