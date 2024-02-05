import './App.css';
// import ReactDOM from "react-dom/client";
// import {BrowserRouter,Routes, Route} from "react-router-dom";
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import IntroPage from './components/intropage';
import Message from './components/Message2.js';
function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </BrowserRouter>
  );
    
}

export default App;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

