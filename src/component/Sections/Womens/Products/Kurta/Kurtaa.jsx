import React from 'react';
import { Link } from 'react-router-dom';
import './Kurta.css';


function Kurtaa() {
  const products = [
    { id: 1, img: 'https://5.imimg.com/data5/SELLER/Default/2023/1/GU/SM/NA/164062178/whatsapp-image-2023-01-01-at-2-56-27-pm-1000x1000.jpeg', description: <Link to="/First">LONG KURTA AND PANT</Link> },
    { id: 2, img: 'https://www.libas.in/cdn/shop/files/white-woven-design-cotton-kurta-libas-1-27530071474326.jpg?v=1725532972&width=1080', description: <Link to="/Second">White Woven Design Kurta</Link> },
    { id: 3, img: 'https://4.imimg.com/data4/AX/MW/MY-4343960/ladies-neck-design-kurtas-1000x1000.jpg', description: <Link to="/Third">Ladies Neck Design Kurtas</Link> },
    { id: 4, img: 'https://5.imimg.com/data5/ECOM/Default/2022/7/JG/GE/OA/144140021/directhgarpe-wceks6371-2-500x500.jpg', description: <Link to="/Fourth">Rayon Front Slit Kurta</Link> },
    { id: 5, img: 'https://www.urbanwardrobe.in/cdn/shop/products/G1_fd6fb29b-e490-47ef-96c6-24e32676d730.jpg?v=1600956972&width=823', description: <Link to="/fifth">GREEN WOMAN KURTA</Link> },
    { id: 6, img: 'https://m.media-amazon.com/images/I/6198iNi-q3L._SY879_.jpg', description: <Link to="/Sixth">RATIKA Women kurta</Link> },
    { id: 7, img: 'https://cpimg.tistatic.com/07007548/b/4/Ladies-Ivory-White-Self-Print-Cotton-Kurti-Set-With-Palazzo.jpg', description: <Link to="/Seventh">White Self Print Cotton Kurti</Link> },
    { id: 8, img: 'https://www.trendphoria.com/cdn/shop/products/1007-AC-037533-BLCK_1.jpg?v=1694452071&width=823', description: <Link to="/Eighth">Pleated Dress Kurta</Link>  }, 
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
      <h1>Kurta</h1>
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

export default Kurtaa;
