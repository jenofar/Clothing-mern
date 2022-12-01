import Welcome from "./components/Welcome";
import Product from "./components/product";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/register";
import Cart from "./components/cart";
import Payment from "./components/payment";
import Confirm from "./components/confirm";
import userContext from './context';
import PrivateRoute from "./PrivateRoute";

import "./App.css";

function App() {
  return (
    <>
      <Router>
      <userContext.Provider value={{auth:null,user:null}}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route exact path="/welcome" element={<PrivateRoute><Welcome /></PrivateRoute>} />
          <Route exact path="/product" element={<PrivateRoute>
            <Product />
          </PrivateRoute>} />
          <Route exact path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
          <Route exact path="/success" element={<PrivateRoute><Confirm /></PrivateRoute>} />
          <Route exact path="/payment" element={<PrivateRoute><Payment /></PrivateRoute>} />
        </Routes>
        </userContext.Provider>
      </Router>
    </>
  );
}

export default App;
