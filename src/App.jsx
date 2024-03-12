import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SignupPage from "./pages/signupPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import Home from "./pages/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<h1 className="p-5">Homepage</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
