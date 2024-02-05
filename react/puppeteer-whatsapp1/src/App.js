import './App.css';
import LoginPage from './LoginPage.js'
import IntroPage from './IntroPage.js'
import {BrowserRouter,Routes, Route} from "react-router-dom";
import MessagePage from './MessagePage3.js';
function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/message" element={<MessagePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;


