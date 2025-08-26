

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import TransactionsPage from './pages/TransactionsPage'
import { Goals } from './pages/Goals'

function App() {


  return (
    <>
      
       <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<TransactionsPage/>}/>
          <Route path='/goals' element={<Goals/>}/>

        </Routes>
        </BrowserRouter>
       </div>
    </>
  )
}

export default App
