import { Route, Routes }  from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Detail from './pages/Detail';
import './App.css';
import Layout from './common/Layout';

function App() {
  return (
    
      <Routes>
        <Route 
          path="/" 
          element={<Layout content={<Home />}/>} />
        <Route path="/" element={<Search />} />
        <Route path="/" element={<Detail />} />
      </Routes>
  );
}

export default App;