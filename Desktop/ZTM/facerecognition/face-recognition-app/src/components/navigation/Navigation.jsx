import React from 'react'

const Navigation = ({onRouteChange,isSignedIn}) => {
  console.log(isSignedIn.isSignedIn)
  console.log('signout pe aaya')
  if (isSignedIn.isSignedIn){
    return (
      <nav style={{display:'flex' ,justifyContent:'flex-end'}}>
         <p onClick={()=>onRouteChange('signout')} className='f3 link dim white underline pa3 pointer'>Signout</p> 
      </nav>)
  }
  else{
    return (
      <nav style={{display:'flex' ,justifyContent:'flex-end'}}>
        <>
        {console.log('signout ke else pe aaya')}
        <p onClick={()=>onRouteChange('signin')} className='f3 link dim white underline pa3 pointer'>Signin</p> 
        <p onClick={()=>onRouteChange('register')} className='f3 link dim white underline pa3 pointer'>Register</p> 
        </>
         
      </nav>
    )
  }
  
}

export default Navigation