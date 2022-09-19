import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../assets/context/UserContext";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from "./Home";
import Checkout from "./Checkout";
import Artist from "./Artist";

export default function App() {

  const [user, setUser] = useState(null);
  const [counter, setCounter] = useState(0);
  const [cart, setCart] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser, counter, setCounter, cart, setCart }} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/artist/:idArtista" element={<Artist/>} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
};