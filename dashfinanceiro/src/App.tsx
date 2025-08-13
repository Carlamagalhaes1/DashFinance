

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import TransactionsPage from './pages/TransactionsPage'

function App() {


  return (
    <>
      
       <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<TransactionsPage/>}/>

        </Routes>
        </BrowserRouter>
       </div>
    </>
  )
}

export default App
