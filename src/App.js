import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Content, Footer, Header } from './func-components';
 
import Calendar from './class-cpmponents'
 
function App() {
return (
  <>
  <Header/>
    <p>
        <center>
          <Calendar />
        </center>
  </p>
  <Content/>
  <Footer/>
 
  </>
 
)
 
}
 
export default App;