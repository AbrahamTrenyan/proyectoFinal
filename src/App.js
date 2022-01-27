import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Footer from './Components/Footer'
import Account from './pages/Account/Account';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import Navbar from './Components/Navbar/Navbar';
import UserProvider from './store/storeContext';
import Laptops from './pages/Laptops/Laptops';
import Audio from './pages/Audio/Audio';
import Smartwatches from './pages/Smartwatches/Smartwatches';




function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/laptops' element={<Laptops />} />
            <Route path='/smartwatches' element={<Smartwatches />} />
            <Route path='/audio' element={<Audio />} />
            <Route path='/account' element={<Account />} />
            <Route path='/createaccount' element={<CreateAccount />} />
          </Routes>
          <Footer />
        </Router>
      </UserProvider>
    </>
  );
}
export default App;
