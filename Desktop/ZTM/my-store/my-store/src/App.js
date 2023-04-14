import Home from './routes/Home.component.jsx'
import {Routes,Route} from 'react-router-dom'
import React from 'react'
import { Navigation } from './routes/Navigation.jsx'
import { Authentication } from './routes/Authentication.jsx'
import Shop from './routes/shop/Shop.jsx'
import CheckoutPage from './routes/checkout/CheckoutPage.jsx'
const App = () => {
  return (
  

    <Routes>
      
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='sign-in' element={<Authentication/>}/>
        <Route path ='checkout' element={<CheckoutPage/>}/>
        </Route>
        
      
    </Routes>
    
  )
}

export default App


