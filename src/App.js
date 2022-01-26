import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Footer from './Components/Footer'
import Account from './pages/Account/Account';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import Navbar from './Components/Navbar/Navbar';
import UserProvider from './store/storeContext';


function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/laptops' element={<Home />} />
            <Route path='/smartwatches' element={<Home />} />
            <Route path='/audio' element={<Home />} />
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
