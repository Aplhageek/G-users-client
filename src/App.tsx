import { Toaster } from 'react-hot-toast'
import './App.css'
import HomePage from './pages/Home'



function App() {

  return (
    <div className='app_container'>
      <Toaster/>
      <HomePage />
    </div>
  )
}

export default App
