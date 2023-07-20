
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <NavbarComp/>
    
      <Routes>
        <Route path='/' key={'general'} element={<News pageSize={18} country='in' category='general' />} ></Route>
        <Route path='health' key={'health'} element={<News pageSize={18} country='in' category='health' />} > </Route>
        <Route path='entertainment' key={'entertainment'} element={<News pageSize={18}  country='in' category='entertainment' />} > </Route>
        <Route path='business' key={'business'} element={<News pageSize={18} country='in' category='business' />} > </Route>
        <Route path='science' key={'science'} element={<News pageSize={18} country='in' category='science' />} > </Route>
        <Route path='sports' key={'sports'} element={<News pageSize={18} country='in' category='sports' />} > </Route>
        <Route path='technology' key={'technology'} element={<News pageSize={18} country='in' category='technology' />} > </Route>

      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
