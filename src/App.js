import { BrowserRouter, Route, Routes }  from 'react-router-dom';

import Home from './pages/Home';
import Search from './pages/Search';
import Detail from './pages/Detail';
import Layout from './common/Layout';

import './App.css';
import { getVideoSearch } from "./apis/videos";


function App() {
  return (
    
      <Routes>
        <Route 
          path="/" 
          element={<Layout content={<Home />}/>} />
        <Route 
          path="/" 
          element={<Layout content={<Detail />}/>} />
        <Route 
          path="/" 
          element={<Layout content={<Search />}/>} />
      </Routes>
    
  );
}


export default App;