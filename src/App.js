import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Pages/Homepage';
import Footer from './components/Pages/Footer';
import InventoryDetail from './components/Inventory/InventoryDetail';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import RequireAuth from './components/UtilityCompo/RequireAuth';
import ManageInventories from './components/Inventory/ManageInventories';
import AddInventoryItem from './components/Inventory/AddInventoryItem';
import MyItems from './components/Inventory/MyItems';
import NotFound from './components/Pages/NotFound';
import Blogs from './components/Pages/Blogs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/addItem' element={<RequireAuth><AddInventoryItem></AddInventoryItem></RequireAuth>}></Route>
        <Route path='/myItems' element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>
        <Route path='/inventories' element={<RequireAuth><ManageInventories></ManageInventories></RequireAuth>}></Route>
        <Route path='/inventory/:id' element={<RequireAuth><InventoryDetail></InventoryDetail></RequireAuth>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
