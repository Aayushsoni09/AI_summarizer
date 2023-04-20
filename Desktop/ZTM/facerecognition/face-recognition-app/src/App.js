import './App.css';
import React from 'react'
import ParticlesBg from 'particles-bg'
import Navigation from  './components/navigation/Navigation'
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/image-link-form/ImageLinkForm';
import Rank from './components/rank/Rank';
function App() {
  return (
    <div className="App">
      <ParticlesBg color="#FEFDFD" type="cobweb" bg={true} />
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm/>
    </div>
  );
}

export default App;
