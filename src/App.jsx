import Header from './components/Header'
import Landing from './components/Landing'
import Foot from './components/Foot'
import Home from './pages/Home'
import { Routes , Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import './bootstrap.min.css'
import './App.css'

function App() {

  return (
    <>
      <Header/> 
         <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/home' element={<Home/>} />
         </Routes>
      <Foot/>
      <Toaster/>
    </>
  )
}

export default App
