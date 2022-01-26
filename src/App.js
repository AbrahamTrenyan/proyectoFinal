import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Footer from './Components/Footer'
import Account from './pages/Account/Account';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/laptops' element={<Home />}/>
          <Route path='/smartwatches' element={<Home />}/>
          <Route path='/audio' element={<Home />}/>
          <Route path='/account' element={<Account />}/>
          <Route path='/createaccount' element={<CreateAccount />}/>

        </Routes>
        <Footer />
      </Router> 
    </>
  );
}
export default App;
