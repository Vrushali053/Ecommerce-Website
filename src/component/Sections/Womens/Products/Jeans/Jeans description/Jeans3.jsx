import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Jeans1.css';




function Jeans3() {
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
"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRuWUj5NJybKj96IVLnJ-dLnI4Gsa1tzFayymOHaYDFZ6VvZxMTGuCgPQly9NM1KzlShlbONtZeNAZEQIqZepJXuAzFxtxvoIXJzzYtB-K7LhoUQrakRweA&usqp=CAE",
"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSEx417_IT3XQa50mWXFlfusuFqULfuKsrDUswPSp2IqK_M3ZWiuLv600iJZBzz9Hvhoo7gmTph6uPaYWz832vV5zEUIGAxO0Rc_5AStu13Y6LK2Abk9J8b1g&usqp=CAE",
"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRuWUj5NJybKj96IVLnJ-dLnI4Gsa1tzFayymOHaYDFZ6VvZxMTGuCgPQly9NM1KzlShlbONtZeNAZEQIqZepJXuAzFxtxvoIXJzzYtB-K7LhoUQrakRweA&usqp=CAE",
"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSEx417_IT3XQa50mWXFlfusuFqULfuKsrDUswPSp2IqK_M3ZWiuLv600iJZBzz9Hvhoo7gmTph6uPaYWz832vV5zEUIGAxO0Rc_5AStu13Y6LK2Abk9J8b1g&usqp=CAE",
"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQv0R1PjEOhn4OBtsr4t1WR0KscC8_SRL4lNqNJz9toLZuwSu1Q5bs8dQysdXkhFCjpi8FsZ0YiUJXEYScjrsyx93NAgcUG6ZQwDgblRofRQkRPgz-3-So&usqp=CAE",
"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTRq5zxV2QjVK6y4_hm5y6luL4qbdDlCnbTlK8WaKO9jXL6pP5fl-t_O-ZxrU-tAEVix_G_XVIawVjG2S9msZQqh5NRavvmwP5Z3Fp9VGB6MGczH-8t_MfO&usqp=CAE",
"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQv0R1PjEOhn4OBtsr4t1WR0KscC8_SRL4lNqNJz9toLZuwSu1Q5bs8dQysdXkhFCjpi8FsZ0YiUJXEYScjrsyx93NAgcUG6ZQwDgblRofRQkRPgz-3-So&usqp=CAE",
"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTRq5zxV2QjVK6y4_hm5y6luL4qbdDlCnbTlK8WaKO9jXL6pP5fl-t_O-ZxrU-tAEVix_G_XVIawVjG2S9msZQqh5NRavvmwP5Z3Fp9VGB6MGczH-8t_MfO&usqp=CAE",
];

  return (
    <div>
      <div className='cl'>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <img
        src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRuWUj5NJybKj96IVLnJ-dLnI4Gsa1tzFayymOHaYDFZ6VvZxMTGuCgPQly9NM1KzlShlbONtZeNAZEQIqZepJXuAzFxtxvoIXJzzYtB-K7LhoUQrakRweA&usqp=CAE"
        alt="Description"
        style={{ width: '40%', height: '500px', marginRight: '0px' }}
      />
          <div className='colour'>
            <div className='description'>Kotty Regular Women Black</div>
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

export default Jeans3;
