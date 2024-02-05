import React from 'react';
import Join from './components/Join/Join.js';
import Chat from './components/Chat/Chat.js';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';



const App =()=> (
    <Router>
        <Routes>
            <Route path='/' exact Component={Join}/>
            <Route path='/chat' exact Component={Chat}/>
        </Routes>
    </Router>
);
export default App;