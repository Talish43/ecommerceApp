import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import SingleProduct from "./screens/SingleProduct";
import Cart from "./screens/Cart";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Profile from "./screens/Profile";
import Shipping from "./screens/Shipping";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/product/:id" element={<SingleProduct />} />
              <Route path="/cart/:id?" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register/?" element={<Register />} />
              <Route path="/profile/" element={<Profile />} />
              <Route path="/shipping/" element={<Shipping />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
