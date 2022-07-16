import logo from './logo.svg';
import 'antd/dist/antd.min.css'; 
import { HashRouter, Routes, Route } from 'react-router-dom';

// redux and store
import { Provider } from 'react-redux';
import store from './app/store'

// components
import Home from './pages/Home'
import Register from './pages/Register';

// fungsi listener
import { listen } from './app/listener'
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    listen()
  }, [])

  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
