import React from 'react';
import { Link } from 'react-router-dom';
import './Jeans.css';


function Jeans() {
  const products = [
    { id: 1, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQwNY-48COySw3awXW0n3LP5oFEPQ1GmBBVrc4c2AcGMMpBaf0n6xUCcGK1Bk_ihAB8xzaTE8w-Pq6pzB6ruS6drD8AFfhc-8B_ZXkClIxy', description: <Link to="/Jeans1">Tokyo Talkies Women Regular</Link> },
    { id: 2, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQr540RCizA9-2YDSJVHHcreRX-wdp3IraM1iqVgfpIMKN6AJm0dGSLc3oIe3E0gzsUAwG8h564BUgAKCOlpiNpWmHsyNZ2dc-d-csE24rJ&usqp=CAE', description: <Link to="/Jeans2">	
                    Stretchable Jeans</Link> },
    { id: 3, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRuWUj5NJybKj96IVLnJ-dLnI4Gsa1tzFayymOHaYDFZ6VvZxMTGuCgPQly9NM1KzlShlbONtZeNAZEQIqZepJXuAzFxtxvoIXJzzYtB-K7LhoUQrakRweA&usqp=CAE', description: <Link to="/Jeans3">	
                   Kotty Regular Women Black</Link> },
    { id: 4, img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQx_kZLFdxjWIoz0sHQ8aX3VJBJmMnhIKokYGxRwk6o6vVuOvPFMMikUGRJrG3PUSh1auI99mRybZBWESs2iWi3_lkT2ZaYaR4r8owpLivDTx_0yFaZZcoxDA&usqp=CAE', description: <Link to="/Jeans4"> Light Fade Stretchable Jeans</Link> },
    { id: 5, img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSpm3qhZ_4ZqD4jHGSplcTwCaQhexUqwSkneO5Y4_ti8716C1Az7bkvYn1KS74PLBuYv1bCtXw-WcAu0WczgHSvmOmCLTroB4zuvSPk0mwJ&usqp=CAE', description: <Link to="/Jeans5">Cotton High-Rise Jeans</Link> },
    { id: 6, img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT8hYMhbxFXbHfw8n3FKVdQyDFv8rOiqPWPpoJVxms9uyQ25nc88SVcyTWLhBmiyf5YvlhmpgAU_3kaBZA-rkFapF-qAel68ah-pOswcsQs&usqp=CAE', description: <Link to="/Jeans6">	
                    Women Slouchy Fit Jeans</Link> },
    { id: 7, img: 'https://tigc.in/cdn/shop/files/compress_1221-dnmsk-131-cream__1.jpg?v=1720756099&width=1000', description: <Link to="/Jeans7">Women's Solid Jeans</Link> },
    { id: 8, img: 'https://tigc.in/cdn/shop/files/compress_0923-fhdnmcrg-42-burgundy__1.jpg?v=1720725561&width=1000', description: <Link to="/Jeans8">Women's Relaxed Fit Jeans</Link>  }, 
  //   { id: 9, img: 'https://content.jdmagicbox.com/rep/b2b/khadi-kurti/khadi-kurti-1.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit', description: 'Festive Designer Women Kurti' },
    // { id: 10, img: 'https://www.dial4trade.com/uploaded_files/product_images/thumbs/calf-long-straight-ladies-designer-kurta-org-967891817976164012.jpg', description: ' Ladies Designer Kurta' },
    // { id: 11, img: 'https://www.jiomart.com/images/product/original/rvxe5n26ts/hey-bm-women-printed-self-design-floral-print-ethnic-dress-kurta-black-product-images-rvxe5n26ts-0-202309270443.jpg?im=Resize=(600,750)', description: 'Floral Print Ethnic Dress' },
    // { id: 12, img: 'https://n-img3.junaroad.com/uiproducts/19961883/zoom_0-1686367652.jpg', description: 'women straight kurta' },
    // { id: 13, img: 'https://walusha.in/cdn/shop/files/5_d803d2a1-1475-4166-b921-39ffea100a8f.jpg?v=1692770206&width=990', description: 'Designer Kurtis' },
    // { id: 14, img: 'https://www.libas.in/cdn/shop/files/fuchsia-yoke-design-silk-kurta-libas-2.jpg?v=1725572289&width=1800', description: 'Fuchsia Yoke Design Silk Kurta' },
    // { id: 15, img: 'https://assets0.mirraw.com/images/11942147/N2ZJOK_1366_Green-1_zoom.jpg?1697117665', description: ' Green Cotton Women Kurta' },
    // { id: 16, img: 'https://mahezon.in/cdn/shop/files/IMG-20240222_214527_249_800x1026_crop_center@2x.jpg?v=1708619206', description: 'Party wear Designer Red Kurta' },
  
  ];
  const handleViewMore = (id) => {
    console.log(`View more for product ID: ${id}`);
  };

  return (
    <div className='kurta'>
      <h1>Jeans</h1>
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

export default  Jeans;
