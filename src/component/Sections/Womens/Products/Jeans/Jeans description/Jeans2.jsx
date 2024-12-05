import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Jeans1.css';




function Jeans2() {
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
"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT_y2dHMH3CJIa6VhQDgMXEXulA4_VD0mmYbpHaZkzy915XcBw0oX7IFtF3GnEoRGsMc5LN_b1k7Dk-wHfaj9fobi6Gk-KThzDHsv8dxblauIShKj18yQ&usqp=CAY",
"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRZfhDi3J7KJKzeaavnKjViJhRu1dfDNHy43_EEeb74jeng3rkLbu-tVl-6OLkt3uEX7l8ufMUZ3jZ6616K6qSI7x12EJ8JK_ypFB6Rc8_YrsrQwPcKwP9jIQ",
"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTaLCGmSuMcz2wlJGmmGGeqGjqYj3tLKeGfU0Yt4n6cVc_1iPVPpIV0crOiNSkaC5G4gr3V6hoZLWhb8e5Q_10IgoLVF9BgyBNMe_og6hrYtgThn0ks3oNz",
"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ3NZdb0HF3jLXFzBc-YXEf_hZ63VlkswaZfS4ypK5U9LarlrcieVLK3zSmkv3bft_lIxge9e40uSwW40St9UrMRYk2IKz6pZeUJ8NHAkfD8zFfMiFuHzTEEA",
"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSbUYju8ODmzPQ0jnTrjlvQq4dJ0KWyc1lwMy4qAETU3DGbGe35_2FlrCPyKh3vikSmyydnyP9QRtDmjMvtWjaC_8nFZb0xsb0W9Ne2tpfW",
"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ3NZdb0HF3jLXFzBc-YXEf_hZ63VlkswaZfS4ypK5U9LarlrcieVLK3zSmkv3bft_lIxge9e40uSwW40St9UrMRYk2IKz6pZeUJ8NHAkfD8zFfMiFuHzTEEA",
"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQr540RCizA9-2YDSJVHHcreRX-wdp3IraM1iqVgfpIMKN6AJm0dGSLc3oIe3E0gzsUAwG8h564BUgAKCOlpiNpWmHsyNZ2dc-d-csE24rJ&usqp=CAE",
"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ3NZdb0HF3jLXFzBc-YXEf_hZ63VlkswaZfS4ypK5U9LarlrcieVLK3zSmkv3bft_lIxge9e40uSwW40St9UrMRYk2IKz6pZeUJ8NHAkfD8zFfMiFuHzTEEA",
];

  return (
    <div>
      <div className='cl'>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <img
        src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQr540RCizA9-2YDSJVHHcreRX-wdp3IraM1iqVgfpIMKN6AJm0dGSLc3oIe3E0gzsUAwG8h564BUgAKCOlpiNpWmHsyNZ2dc-d-csE24rJ&usqp=CAE"
        alt="Description"
        style={{ width: '40%', height: '500px', marginRight: '0px' }}
      />
          <div className='colour'>
            <div className='description'>Stretchable Jeans</div>
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

export default Jeans2;
