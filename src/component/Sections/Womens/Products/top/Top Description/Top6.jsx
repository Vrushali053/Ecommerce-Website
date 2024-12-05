import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Top1.css';




function Top6() {
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
"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQgPL6_J9Fh97My3W-r_6KZMokddkR206lIdJILZxmdKaxVPxhbyGLqJUsq7-tF3-AUJwl3iSpU0moOYdVHM4swOORb49grFCMnefuf0YEH&usqp=CAE",
"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTshIiBbkTkY4jG_qhKDeJv0Gz81rf59AuKjjbCRnxZANY3BvvN4neWdColY6CQ7H9jwXp1jyM0NQ11D7no6l4d71DjkONDUZg2aoi-G2iVO46cSiYSZ3cm&usqp=CAE",
"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQgPL6_J9Fh97My3W-r_6KZMokddkR206lIdJILZxmdKaxVPxhbyGLqJUsq7-tF3-AUJwl3iSpU0moOYdVHM4swOORb49grFCMnefuf0YEH&usqp=CAE",
"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTshIiBbkTkY4jG_qhKDeJv0Gz81rf59AuKjjbCRnxZANY3BvvN4neWdColY6CQ7H9jwXp1jyM0NQ11D7no6l4d71DjkONDUZg2aoi-G2iVO46cSiYSZ3cm&usqp=CAE",
"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQgPL6_J9Fh97My3W-r_6KZMokddkR206lIdJILZxmdKaxVPxhbyGLqJUsq7-tF3-AUJwl3iSpU0moOYdVHM4swOORb49grFCMnefuf0YEH&usqp=CAE",
"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTshIiBbkTkY4jG_qhKDeJv0Gz81rf59AuKjjbCRnxZANY3BvvN4neWdColY6CQ7H9jwXp1jyM0NQ11D7no6l4d71DjkONDUZg2aoi-G2iVO46cSiYSZ3cm&usqp=CAE",
"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQz2fxwkwKbZQZw9NNozqZeVFKH4b1UJ7m_Qc96jSyILzrkmYy2H4jeKtnuUw3KmqII7H7ZTI1pDAIOZAcWXUyoAsyTrj0SEA_nNB9f7y5bwSVm7Wbb77fBWg&usqp=CAE",
"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTHlMJXDlCV6eP3TbiAOJFs7CHUQei63Os6JSEe_JL_YytLwex5Oew8zlmXmRWalCHx79DHxQg_YSXIq__yQsfIYJqzIylSuLBvMI_juFNT&usqp=CAE",


];

  return (
    <div>
      <div className='cl'>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <img
        src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQgPL6_J9Fh97My3W-r_6KZMokddkR206lIdJILZxmdKaxVPxhbyGLqJUsq7-tF3-AUJwl3iSpU0moOYdVHM4swOORb49grFCMnefuf0YEH&usqp=CAE"
        alt="Description"
        style={{ width: '40%', height: '500px', marginRight: '0px' }}
      />
          <div className='colour'>
            <div className='description'>Pink crop peplum top </div>
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

export default Top6;
