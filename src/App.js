import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Nav from './components/Nav';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Nav /><Home /></>} />
          <Route path='/about' element={<><Nav /><Home /></>} />
          <Route path='/login' element={<><Nav className="Nav-login" /><Login /></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;