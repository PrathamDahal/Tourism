import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Component/Main/Layout';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NoPage from './NoPage';
import WhereToGo from './Pages/WhereToGo/WhereToGo';
import WhereToStay from './Pages/WhereToStay/WhereToStay';
import LocalProducts from './Pages/Local Products/LocalProducts';
import ContactUs from './Pages/ContactUs/ContactUs';
import SignUp from './Pages/Sign Up/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/WhereToGo" element={<WhereToGo />} />
            <Route path="/WhereToStay" element={<WhereToStay />} />
            <Route path="/LocalProducts" element={<LocalProducts />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
