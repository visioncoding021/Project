import React from 'react';
import Header from './components/Header.js'
import Body from './Body.js';
import './index.css';
const AppLayout = ()=>{
    return(
     <div className='app'>
       <Header></Header>
       <Body></Body>
 
     </div>
    )
  }

  export default AppLayout;