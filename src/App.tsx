import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Favorites from './pages/Favorites';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Founders from './pages/Founders';
import Feedback from './pages/Feedback';
import CustomCoffee from './pages/CustomCoffee';
import Help from './pages/Help';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/founders" element={<Founders />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/custom-coffee" element={<CustomCoffee />} />
              <Route path="/help" element={<Help />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;