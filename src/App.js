import { useEffect, useState } from "react";
// import {HashRouter as Router, Routes, Route, useAsyncError } from "react-router-dom"; //22-05-2024
import {BrowserRouter as Router, Routes, Route, useAsyncError } from "react-router-dom";

import Header from "./Components/header";
import Sidebar from "./Components/sidebar";
import TransactionReport from "./Components/transactionReport";
import UserMaster from "./Components/userMaster";
import UserAccessRights from "./Components/userAccessRights";
import ZonewiseReport from "./Components/localBodyReport";
import HeaderwiseReport from "./Components/headerwiseReport";
import GatewaywiseReport from "./Components/districtwiseReport";
import FileDetails from "./Components/payment";
import Checkout from "./Components/checkout";
import PaymentPage from "./Components/paymentPage";
import PaymentConfirm from "./Components/payment-confirm";
import Layout from "./Components/Layout";
import PaymentIntro from "./Components/payment";
import ESlip from "./Components/eSlip";
import LoginUser from "./Components/login";

function App() {
 
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  const handleLoginSuccess = () => {
    
    setIsLoggedIn(true);
  };


  

  return (
    <Router>
      <div className="App">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}  />
       <Layout  sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
       <Routes>
       !isLoggedIn && <Route path="/login" element={<LoginUser onLoginSuccess={handleLoginSuccess} />} />
       <Route path="/payment" element={<PaymentIntro />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/payment-page" element={<PaymentPage />} />
                <Route path="/payment-confirm" element={<PaymentConfirm />} />
                <Route path="/e-pay" element={<ESlip/>} />
       </Routes>
      </div>
    </Router>
  );
}

export default App;
