

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import TransactionsPage from './pages/TransactionsPage'
import { Goals } from './pages/Goals'
import { Layout } from './layout'
import Dash from './pages/Dashboard'

function App() {


  return (
    <>

      <div>
        <BrowserRouter>
          <Routes>
            <Route  element={<Layout />}>
              <Route path="/" element={<TransactionsPage />} />
              <Route path='/goals' element={<Goals />} />
              <Route path='/dashboard' element={<Dash/>}/>
            </Route>


          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
