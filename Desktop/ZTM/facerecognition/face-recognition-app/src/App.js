import { useState } from 'react';
import './App.css';
import React from 'react'
import ParticlesBg from 'particles-bg'
import Navigation from  './components/navigation/Navigation'
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/image-link-form/ImageLinkForm';
import Rank from './components/rank/Rank';
import Signin from './components/signin/Signin';
import Register from './components/register/Register';


function App() {
  const [route,setRoute]=useState({
    route :'signin',
  })
  const [signedIn,setSignedIn]=useState({
    isSignedIn:false,
  })

  const onRouteChange=(route)=>{
    if(route==='signout'){
      setSignedIn({isSignedIn:false})
    }
    else if(route ==='home'){
      setSignedIn({isSignedIn:true})
    }
    setRoute({route:route})
  }

  return (
    <div className="App">
      <ParticlesBg color="#FEFDFD" type="cobweb" bg={true} />
      <Navigation onRouteChange={onRouteChange} isSignedIn={signedIn}/>
      {route.route === 'home' ?
         <div>
            <Logo/>
            <Rank/>
            <ImageLinkForm/>
          </div>
      :
      (
        route.route === 'signin' ?
        <Signin onRouteChange={onRouteChange} isSignedIn={route}/>
        :
        <Register onRouteChange={onRouteChange}/>
      )

  }

    </div>
  );
}

export default App;
