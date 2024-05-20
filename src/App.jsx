import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Conversations from "./Components/Conversations";
import Chatlists from "./Components/Chatlists";
import LoginModal from "./Components/Auth/LoginModal";
import SignupModal from "./Components/Auth/SignupModal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Router>
        <div>
          <Toaster />
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LoginModal />} />
          <Route exact path="/signup" element={<SignupModal />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
