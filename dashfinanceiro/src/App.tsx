

import {  Route, Routes } from 'react-router-dom'
import './App.css'
import TransactionsPage from './pages/TransactionsPage'
import { Goals } from './pages/Goals'

import Dash from './pages/Dashboard'
import { Layout } from './Layout'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {


  return (
    <>

      <div>
        
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage/>}/>
            <Route  element={<Layout />}>
              

              <Route path="/transacoes" element={<TransactionsPage />} />
              <Route path='/goals' element={<Goals />} />
              <Route path='/dashboard' element={<Dash/>}/>
            </Route>


          </Routes>
       
      </div>
    </>
  )
}

export default App
