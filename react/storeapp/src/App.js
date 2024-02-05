// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import { Container } from "reactstrap";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Logout from "./components/Logout";

function App() {
  return (
    <Container>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/login" element={<Login/>}/> 
        <Route path="/logout" element={<Logout/>}/> 
        <Route path="/registration" element={<Registration/>}/> 
      </Routes></BrowserRouter>
    </Container>
    // <div>
    //   <Home/> 
    // </div>
  );
}

export default App;
