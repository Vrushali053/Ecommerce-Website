import React from 'react';
import { Link } from 'react-router-dom';
import './Lehenga.css';


function Lehenga() {
  const products = [
    { id: 1, img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTtcuBqerej9SslADOBnrzd0sFTAQ_Rkx5x_UA6uv7EVmIsKU-LNPakDiFfEi7rbJBjWdpsLbiAOzW_BbNvj2X-o6O94JhkcNuC23ao4F1bIErTJCUlayiB3w', description: <Link to="/Top1"> Regular Smart Casual Top</Link> },
    { id: 2, img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSnBqQMn0XflQu8tCmtCkaJwHe5w2P3bqBCIIvPWqR4tLuUqB3jEjhrOVk4lRc6sGjJLZTx2WTaglV6WvaefQ859KTXOi1ki8AAn4RXM_Y&usqp=CAE', description: <Link to="/Top2">	
                   	DressBerry Round Neck</Link> },
    { id: 3, img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRoFisQk-P39wvGkSqiLjpiPRPg18OkD7lUK1jQW4Ai0DEe5wvYPypUO8j_eDCd3DaWxaCcaKcCsYN0DLIEptRE_n7LFOs25Z-CUolGXPK_SZNRRzzS9GFTTw&usqp=CAE', description: <Link to="/Top3">	
                   Black crop cinched waist top</Link> },
    { id: 4, img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTB5E_kN1EkmKFV2tyhsFp-PyhfBNBnCQDx87UKy1lwVjQ9T3XdyjLc7hyMZVbzJD32uV0_TfjrdOOh1NmOBl_nzjpm9QzJSp5MIntjpxI&usqp=CAE', description: <Link to="/Top4">Brown regular top </Link> },
    { id: 5, img: 'https://m.media-amazon.com/images/I/71+NQ+T609L._SY879_.jpg', description: <Link to="/Top5">Crepe Short Tunic Top</Link> },
    { id: 6, img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQgPL6_J9Fh97My3W-r_6KZMokddkR206lIdJILZxmdKaxVPxhbyGLqJUsq7-tF3-AUJwl3iSpU0moOYdVHM4swOORb49grFCMnefuf0YEH&usqp=CAE', description: <Link to="/Top6">	
                   Pink crop peplum top </Link> },
    { id: 7, img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQLdsxC_N8tWIWySxCNA9SgDBYg7eWSuAtbneVoQCaRrPDRJySnjMAaq8zZkV1hmI8dVlD9rEspWzXMcQzaZDK-ePsMuDbg02aymWCPXaHj5xyUBxCL2sAr&usqp=CAE', description: <Link to="/Top7">Mustard yellow crop top</Link> },
    { id: 8, img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT6AMUbTT_PAGZdBJBWbw3KdYf4dg_avi1oSUEIz865IjqRyERfreGWbvy8XWcfuEu-yi1JC8q82z4Dk4Luo9_MFk--ynoxShRRjodNGrAh&usqp=CAE', description: <Link to="/Top8">Black Tshirt for women </Link>  }, 
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
      <h1>Lehenga</h1>
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

export default  Lehenga;
