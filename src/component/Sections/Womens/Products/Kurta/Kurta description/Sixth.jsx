// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Sixth.css';

// function Sixth() {
//   const [selectedSize, setSelectedSize] = useState('');

//   const handleSizeChange = (size) => {
//     setSelectedSize(size);
//   };

//   const handleViewMore = (id) => {
    
//     console.log(`Buying product with ID: ${id}, Size: ${selectedSize}`);
//   };

//   return (
//     <div style={{ display: 'flex', alignItems: 'flex-start' }}>
//       <img
//         src="https://m.media-amazon.com/images/I/6198iNi-q3L._SY879_.jpg"
//         alt="Description"
//         style={{ width: '40%', height: '500px', marginRight: '0px' }}
//       />
//       <div className='colour'>
//         <div className='description'>
//         RATIKA Women kurta
//         </div>
//         <div className='desc1'>
//           Price Details
//         </div>
//         <p className='decs2'>
//           Maximum Retail Price: Rs. 1000
//           <p>Discount: 66% OFF</p>
//           <p className='decs3'>Selling Price: Rs. 499</p>
//         </p>
        
//         <div className='size-selection'>
//           <label htmlFor="size">Select Size:</label>
//           <select
//             id="size"
//             value={selectedSize}
//             onChange={(e) => handleSizeChange(e.target.value)}
//           >
//             <option value="">--Select Size--</option>
//             <option value="S">S</option>
//             <option value="M">M</option>
//             <option value="L">L</option>
//             <option value="XL">XL</option>
//           </select>
//         </div>

//         <button
//           className='view-moree'
//           onClick={() => handleViewMore()} 
//           disabled={!selectedSize} 
//         >
//           <Link to="/Paynow">Buy Now</Link>
//           {/* Buy Now */}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Sixth;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sixth.css';




function Sixth() {
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
    "https://5.imimg.com/data5/SELLER/Default/2023/1/GU/SM/NA/164062178/whatsapp-image-2023-01-01-at-2-56-27-pm-500x500.jpeg",
    "https://5.imimg.com/data5/SELLER/Default/2023/1/JZ/JW/YB/164062178/whatsapp-image-2023-01-01-at-2-56-26-pm-1000x1000.jpeg",
    "https://5.imimg.com/data5/SELLER/Default/2023/1/SR/VY/SJ/164062178/whatsapp-image-2023-01-01-at-2-56-26-pm-1--1000x1000.jpeg",
    "https://5.imimg.com/data5/SELLER/Default/2023/1/SX/WC/AD/164062178/whatsapp-image-2023-01-01-at-2-56-25-pm-1000x1000.jpeg",
    "https://5.imimg.com/data5/SELLER/Default/2023/1/DL/UG/YU/164062178/whatsapp-image-2023-01-01-at-2-56-24-pm-1000x1000.jpeg",
    "https://5.imimg.com/data5/SELLER/Default/2023/1/XM/MY/MG/164062178/whatsapp-image-2023-01-01-at-2-56-24-pm-1--1000x1000.jpeg",
    "https://varanga.in/cdn/shop/files/VSKD2394_1_4c5cf2d6-bde4-45d1-89e6-b4c73d305f85.jpg?v=1726367249",
    "https://varanga.in/cdn/shop/files/VSKD2394_6_99b9e0d5-5e65-4496-a735-559340b70d97_compact.jpg?v=1726376614",
  ];

  return (
    <div>
      <div className='cl'>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <img
        src="https://m.media-amazon.com/images/I/6198iNi-q3L._SY879_.jpg"
        alt="Description"
        style={{ width: '40%', height: '500px', marginRight: '0px' }}
      />
          <div className='colour'>
            <div className='description'>LONG KURTA AND PANT</div>
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

export default Sixth;
