import React from 'react';
import { Link } from 'react-router-dom';
import './Shirt.css';


function Shirt() {
  const products = [
    { id: 1, img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQInZ_0nwGbE7QxmYNUVSH1TGY0PcY-OX-5HYdLZ7zcayagcSILvad61esxko-1zIi-EZgR-h9vYe71VN4G_7mJtlaNyUFFNdQyXJR92WdA&usqp=CAE', description: <Link to="/Firsts">Checkered shirt</Link> },
    { id: 2, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQlx35SDNT_-LUftwzcSpRbqqTwNXrUXTyuJ3BI0GwyAednZ87WUdPh7DPH7R2q-5ti46_Ycwyya2FKaq-bmzxGKiYUmpNrjDOS_pzJkEo&usqp=CAE', description: <Link to="/Seconds">Dillinger Men's Shirts</Link> },
    { id: 3, img: 'https://myraymond.com/cdn/shop/products/PMSX17096-R3_20_281_29.webp?v=1709393716', description: <Link to="/Thirds">Men Pink Checks</Link> },
    { id: 4, img: 'https://houseofaldeno.com/cdn/shop/files/GIPAL.jpg?v=1713787202&width=493', description: <Link to="/Fourths">Oxford Magenta Casual Shirt</Link> },
    { id: 5, img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS7SROe6sYof7OkWYL2bZ6MHZ-kNrLqVKH3YnHvu97hNOsJOBBtxlZbOPjU7TIQYuh9zPuaeIfpgKSytkZbQonWogKwlDZENGSBp_61f34&usqp=CAE', description: <Link to="/Fifths">Casual shirt</Link> },
    { id: 6, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSBXWI8Ezrr_OjOj9GL8rbn_jvOCCQ-SjCtvriiLKceDGauP3XuLAyY29AgBhg70FrauzdzSmt5mQFD7DrxG44Zz84-neCTVmLSvDGXADzJ&usqp=CAE', description: <Link to="/Sixs">Checked Slim Fit Casual </Link> },
    { id: 7, img: 'https://assets.ajio.com/medias/sys_master/root/20230427/NEqV/644ab395d55b7d0c63858c3e/-473Wx593H-469477470-white-MODEL.jpg', description: <Link to="/Sevenths"> Print Shirt </Link> },
    { id: 8, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQDbZUDEdFyiM3_kcbwlpB6L3Zch7wV3HMPD0G7lobnoIePpxHK86bHWLtTls1gKyJKHjGNy7149PweIe63SnW2zOzOZmAKL9v__6-kWYonOmCYayhMiC-FGA', description: <Link to="/Eights">Men Cotton Shir</Link>  }, 
  //   { id: 9, img: 'https://content.jdmagicbox.com/rep/b2b/khadi-kurti/khadi-kurti-1.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit', description: 'Festive Designer Women Kurti' },
  //   { id: 10, img: 'https://www.dial4trade.com/uploaded_files/product_images/thumbs/calf-long-straight-ladies-designer-kurta-org-967891817976164012.jpg', description: ' Ladies Designer Kurta' },
  //   { id: 11, img: 'https://www.jiomart.com/images/product/original/rvxe5n26ts/hey-bm-women-printed-self-design-floral-print-ethnic-dress-kurta-black-product-images-rvxe5n26ts-0-202309270443.jpg?im=Resize=(600,750)', description: 'Floral Print Ethnic Dress' },
  //   { id: 12, img: 'https://n-img3.junaroad.com/uiproducts/19961883/zoom_0-1686367652.jpg', description: 'women straight kurta' },
  //   { id: 13, img: 'https://walusha.in/cdn/shop/files/5_d803d2a1-1475-4166-b921-39ffea100a8f.jpg?v=1692770206&width=990', description: 'Designer Kurtis' },
  //   { id: 14, img: 'https://www.libas.in/cdn/shop/files/fuchsia-yoke-design-silk-kurta-libas-2.jpg?v=1725572289&width=1800', description: 'Fuchsia Yoke Design Silk Kurta' },
  //   { id: 15, img: 'https://assets0.mirraw.com/images/11942147/N2ZJOK_1366_Green-1_zoom.jpg?1697117665', description: ' Green Cotton Women Kurta' },
  //   { id: 16, img: 'https://mahezon.in/cdn/shop/files/IMG-20240222_214527_249_800x1026_crop_center@2x.jpg?v=1708619206', description: 'Party wear Designer Red Kurta' },
  // ];
  ];
  const handleViewMore = (id) => {
    console.log(`View more for product ID: ${id}`);
  };

  return (
    <div className='kurta'>
      <h1>Shirt</h1>
      <div className='cart-container'>
        {products.map(product => (
          <div className='cart-item' key={product.id}>
            <img src={product.img} alt={`Product ${product.id}`} />
            <p className='item-description'>{product.description}</p>
            <button className='view-more' onClick={() => handleViewMore(product.id)}>
            <Link to="/Paynow">Add Card</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shirt;
