import { Outlet } from 'react-router'
import { Header, Footer } from './components'
import './App.css'
function App() {
  return(
    <div className='min-h-screen flex flex-col items-center text-white'>
      <Header/>
      <main className='flex-1 w-full'>
      <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
