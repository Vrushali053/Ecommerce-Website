import React from 'react';
import './Cart.css';

const items = {
  womens: [
    { id: 1, image: 'https://www.libas.in/cdn/shop/files/pink-embroidered-silk-blend-straight-kurta-with-trousers-and-dupatta-libas-1-27531273765014.jpg?v=1725595525&width=1800', description: 'Pink Embroidered Silk Blend Straight Kurta With Trousers & Dupatta' },
    { id: 2, image: 'https://www.verymuchindian.com/cdn/shop/products/DSC_5010.jpg?v=1679379971', description: ' Authentic Handloom Pure Silk Muniya Border Paithani ' },
    { id: 3, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRNBN_eSaRcVjL6NNzjqfEMlk9PbbSkjGNLWwASfWNZ2Dq7r72KR8PAHrwYgMLO6iMqZqc5kblHJgr-WMn3ykvMAZIphLiiUHKPRUFEJBt_k8D2MNGBnQv2ig&usqp=CAE', description: 'Aglow Pink Color Party Wear Heavy Sequence Work Gown' },
    { id: 4, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTBMeTUaGi_U7P_ZdvHAkDPK-j8GG-EGHrEppKJOak9T1Z3hB0FbYud4tFd6TJcWnL31bhgqMDwHm_w34ZX1VbtAzPuc3dCvkWaswLOnNm21hpVRYfa1lZvdQ&usqp=CAE', description: 'Black Ribbed Formal Sheath Dress for office' },
  ],
  mens: [
    { id: 1, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQNJcryeQhNq82AmISTuhUlKk4jJNftd_kvFb2AB88GWZrcGTO-jduPLddhZdYuf9OTk4yoVJvXuYCp4MHlNBv6_S-tOYxR5m2JDILcUmgK&usqp=CAE', description: 'The indian Garage Men solid casual Shirt' },
    { id: 2, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcScy97VPypC5720dfXYJyXaX8BxmYu6WKEB953bY6kywuLSmivkRMBt111gCi63I0q9Y2cmlsnMqJ8oFEOTYfIMuS9U6jE7tjkQnV0h_vCpdrfwIs93Y2C6&usqp=CAE', description: ' Lewel Checkered Men Hooded Neck Green, Black' },
    { id: 3, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRrmOcg_051hdNkJgRfGj8v_lqyCXOLYL5oq3EUY3NRfO_Ou67Z9iFdculUWJ0oarhRFDTsdzqDDyE-8O0HhWdYOUYT00w4vE9_osiPh2Gp&usqp=CAE', description: ' StyleCast Men Cargos Trousers for formal were' },
    { id: 4, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRBFuthW1VBAdaqPR-YEk_rPA3vnj4DaYzMhEF5fvzPlrDyAbimNrYazqjln3QRTXvpoExh8NbO1JP4eMsgKLzaDA1JKxuxDXX8PoCGhbi4&usqp=CAE', description: ' Mast & Harbour Men White Regular Fit' },
 
  ],
  kids: [
    { id: 1, image: 'https://www.cutedoll.in/cdn/shop/files/3158A.jpg?v=1715855457&width=990', description: 'Cutedoll Teal Blue Net Sparkle Kids Girls Party Dress' },
    { id: 2, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRuYUg4tqVUZRV7a-xIRmiuB4eqT81IcfBu7-m-s2ZvttFHIa9ajHIhPp4x9rdIuK23ZkCki0MW48Xbnd6jZfif2Y_KaQ9boqARhTzMGWxZ8NOaq59_xN91&usqp=CAE', description: ' LILBITS Kids Boys & Girls Typography Printed' },
    { id: 3, image: 'https://www.aachho.com/cdn/shop/files/75_17b0d8ba-9eb6-4183-adb9-2fe448291d88_720x.jpg?v=1691827762', description: 'Kai Embroidered Lehenga Set for girls ' },
    { id: 4, image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTuiWHp7knv2hGAKWodnZeyJgPg6NZjjzcC9sLZEIVdky_V1F15oypq63rvg--8ydNJ-DvCe_dIvKPCBtMX9vily3QSLol80Yu6rnPwDDI&usqp=CAE', description: 'Typographic Print Round-Neck Sweatshirt' },
 
  ],
};

function Cart() {
  const renderSection = (title, items) => {
    return (
      <div>
        <h2>{title}</h2>
        {items.length === 0 ? (
          <p>No items available</p>
        ) : (
          <div className="cart-items">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.description} />
                <p>{item.description}</p> 
                <button className='b'>Shop Now</button>
              </div>
            ))}
          </div>
        )}
        <p></p>
        {/* <button className="checkout-button">View More</button> */}
      </div>
    );
  };

  return (
    <div className="cart-container">
      {renderSection('Womens', items.womens)}
      {renderSection('Mens', items.mens)}
      {renderSection('Kids', items.kids)}
    </div>
  );
}

export default Cart;
