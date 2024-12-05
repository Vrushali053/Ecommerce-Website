import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Mens from './component/Sections/Mens/Mens';
import Shop from './component/Sections/Shop/Shop';
import Kids from './component/Sections/Kids/Kids';
import Homepage from './component/Hompage/Homepage';
import Women from './component/Sections/Womens/Women';
import Footer from './component/Footer/Footer';
import Login from './component/Sections/login/Login';
import Kurtaa from './component/Sections/Womens/Products/Kurta/Kurtaa';
import Firstd from './component/Sections/Womens/Products/Kurta/Kurta description/Firstd';
import PaymentCard from './component/Sections/Paymentcard/PaymentCard';
import Second from './component/Sections/Womens/Products/Kurta/Kurta description/Second';
import Third from './component/Sections/Womens/Products/Kurta/Kurta description/Third';
import Fourth from './component/Sections/Womens/Products/Kurta/Kurta description/Fourth';
import Paynow from './component/Sections/Paymentcard/Paynow';
import Fifth from './component/Sections/Womens/Products/Kurta/Kurta description/fifth';
import Sixth from './component/Sections/Womens/Products/Kurta/Kurta description/Sixth';
import Seventh from './component/Sections/Womens/Products/Kurta/Kurta description/Seventh';
import Eighth from './component/Sections/Womens/Products/Kurta/Kurta description/Eighth';
import Jeans from './component/Sections/Womens/Products/Jeans/Jeans';
import Jeans1 from './component/Sections/Womens/Products/Jeans/Jeans description/Jeans1';
import Jeans2 from './component/Sections/Womens/Products/Jeans/Jeans description/Jeans2';
import Jeans3 from './component/Sections/Womens/Products/Jeans/Jeans description/Jeans3';
import Jeans8 from './component/Sections/Womens/Products/Jeans/Jeans description/Jeans8';
import Jeans7 from './component/Sections/Womens/Products/Jeans/Jeans description/Jeans7';
import Jeans6 from './component/Sections/Womens/Products/Jeans/Jeans description/Jeans6';
import Jeans5 from './component/Sections/Womens/Products/Jeans/Jeans description/Jeans5';
import Jeans4 from './component/Sections/Womens/Products/Jeans/Jeans description/Jeans4';
import Top from './component/Sections/Womens/Products/top/Top';
import Top1 from './component/Sections/Womens/Products/top/Top Description/Top1';
import Top2 from './component/Sections/Womens/Products/top/Top Description/Top2';
import Top3 from './component/Sections/Womens/Products/top/Top Description/Top3';
import Top4 from './component/Sections/Womens/Products/top/Top Description/Top4';
import Top5 from './component/Sections/Womens/Products/top/Top Description/Top5';
import Top6 from './component/Sections/Womens/Products/top/Top Description/Top6';
import Top7 from './component/Sections/Womens/Products/top/Top Description/Top7';
import Top8 from './component/Sections/Womens/Products/top/Top Description/Top8';
import Dress from './component/Sections/Womens/Products/Dress/Dress';
import Saree from './component/Sections/Womens/Products/Saree/Saree';
import Gaun from './component/Sections/Womens/Products/Gaun/Gaun';
import Lehenga from './component/Sections/Womens/Products/Lehenga/Lehenga';
import Banjara from './component/Sections/Womens/Products/Banjara/Banjara';
import Shirt from './component/Sections/Kids/Product/Shirt/Shirt';
import Firsts from './component/Sections/Kids/Product/Shirt/Shirt description/Firsts';
import Seconds from './component/Sections/Kids/Product/Shirt/Shirt description/Seconds';
import Thirds from './component/Sections/Kids/Product/Shirt/Shirt description/Thirds';
import Fourths from './component/Sections/Kids/Product/Shirt/Shirt description/Fourths';
import Sixs from './component/Sections/Kids/Product/Shirt/Shirt description/Sixs';
import Sevenths from './component/Sections/Kids/Product/Shirt/Shirt description/Sevenths';
import Eights from './component/Sections/Kids/Product/Shirt/Shirt description/Eights';
import Fifths from './component/Sections/Kids/Product/Shirt/Shirt description/Fifths';


function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                <Route path='/' element={<Homepage />}/>
                <Route path='/shop' element={<Shop/>}/>
                <Route path='/mens' element={<Mens/>}/>
                <Route path='/Shirt' element={<Shirt/>}/>
                <Route path='/Firsts' element={<Firsts/>}/>
                <Route path='/Seconds' element={<Seconds/>}/>
                <Route path='/Thirds' element={<Thirds/>}/>
                <Route path='/Fourths' element={<Fourths/>}/>
                <Route path='/Fifths' element={<Fifths/>}/>
                <Route path='/Sixs' element={<Sixs/>}/>
                <Route path='/Sevenths' element={<Sevenths/>}/>
                <Route path='/Eighths' element={<Eights/>}/>
                <Route path='/kids' element={<Kids/>}/>
                <Route path='/women' element={<Women />}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/kurta' element={<Kurtaa/>}/>
               <Route path='/First' element={<Firstd />}/>
               <Route path='/Second' element={<Second />}/>
               <Route path='/Third' element={<Third />}/>
                <Route path='/Fourth' element={<Fourth />}/>
                <Route path='/fifth' element={<Fifth/>} />
                <Route path='/Sixth' element={<Sixth/>} />
                <Route path='/Seventh' element={<Seventh/>}/>
                <Route path='/Eighth' element={<Eighth/>}/>
                <Route path='/Jeans' element={<Jeans/>}/>
                <Route path='/Jeans1' element={<Jeans1/>}/>
                <Route path='/Jeans2' element={<Jeans2/>}/>
                <Route path='/Jeans3' element={<Jeans3/>}/>
                <Route path='/Jeans4' element={<Jeans4/>}/>
                <Route path='/Jeans5' element={<Jeans5/>}/>
                <Route path='/Jeans6' element={<Jeans6/>}/>
                <Route path='/Jeans7' element={<Jeans7/>}/>
                <Route path='/Jeans8' element={<Jeans8/>}/>
                <Route path='/Top' element={<Top/>}/>
                <Route path='Top1' element={<Top1/>}/>
                <Route path='/Top2' element={<Top2/>}/>
                <Route path='/Top3' element={<Top3/>}/>
                <Route path='/Top4' element={<Top4/>}/>
                <Route path='/Top5' element={<Top5/>}/>
                <Route path='/Top6' element={<Top6/>}/>
                <Route path='/Top7' element={<Top7/>}/>
                <Route path='/Top8' element={<Top8/>}/>
                <Route path='/Dress' element={<Dress/>}/>
                <Route path='/Saree' element={<Saree/>}/>
                <Route path='/Gaun' element={<Gaun/>}/>
                <Route path='/Lehenga' element={<Lehenga/>}/>
                <Route path='/Banjara' element={<Banjara/>}/>
               <Route path='/PaymentCard' element={<PaymentCard/>}/>
               <Route path='/Paynow' element={<Paynow />}/>

                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
