import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Transactions from "./pages/transactions/transaction";
import Header from "./components/header";
import Footer from "./components/footer";
import "./index.css";
import "./fontAwesome";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
