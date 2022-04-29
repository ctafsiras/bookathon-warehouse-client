import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Pages/Homepage';
import Footer from './components/Pages/Footer';
import InventoryDetail from './components/Inventory/InventoryDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/inventory/:id' element={<InventoryDetail></InventoryDetail>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
