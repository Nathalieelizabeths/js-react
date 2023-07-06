
// import AddProducts from './Addproducts';
// import Login from './Login';
// import Navigation from './Navigation';
// import Products from './Products';
// import Productdetails from './Productdetails';


// function App() {
//   return (
//     <div >
//      <Login/>
//      <Products/>
//      <Productdetails/>
//      <AddProducts/>
//      <Navigation/>
//     </div>
//   );
// }

// export default App;
// import logo from './logo.svg';
import './App.css';
import Products from './Products';
import Login from './Login';
import Navigationbar from './Navigation';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Productdetails from './Productdetails/productdetails';
import Productdetails from './Productdetails';
// import addProduct from './Addproduct/addproduct';
function App() {
  return (
    <div>
      <Navigationbar/>
      <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/productdetails/:productId' element={<Productdetails/>}/>
        {/* <Route path='/addproduct' element={<Addproduct/>}/> */}
      </Routes>
      </BrowserRouter>
      </div>
  );
}
export default App;
