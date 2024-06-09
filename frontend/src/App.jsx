import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Header from "./components/header";
import Footer from "./components/footer";
import PrivateRoute from "./components/route/private";
import Error from "./pages/error";
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
          <Route element={<PrivateRoute />}> {/* Protecting the /profile route */}
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
