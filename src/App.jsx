
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ViewRecipe from './pages/ViewRecipe';

function App() {
  return (
    <div className='App' >
     <BrowserRouter>
     <div className='mb-[69px]'>
     <Navbar/>
     </div>
     
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/viewrecipe' element={<ViewRecipe/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
