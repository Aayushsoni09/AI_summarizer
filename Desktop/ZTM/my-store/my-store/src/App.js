import Home from './routes/Home.component.jsx'
import {Routes,Route,Outlet} from 'react-router-dom'
import React from 'react'
import { Navigation } from './routes/Navigation.jsx'
import { Authentication } from './routes/Authentication.jsx'

const Shop=()=>{
  return(
    <div>
      <Outlet/>
    <h1>shoppppp</h1>
    </div>
    
  )
}
const App = () => {
  return (
  

    <Routes>
      
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='sign-in' element={<Authentication/>}/>
        </Route>
        
      
    </Routes>
    
  )
}

export default App


