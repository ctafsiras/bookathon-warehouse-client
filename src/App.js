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

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/addItem' element={<AddInventoryItem></AddInventoryItem>}></Route>
        <Route path='/inventories' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='/inventory/:id' element={<RequireAuth><InventoryDetail></InventoryDetail></RequireAuth>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
