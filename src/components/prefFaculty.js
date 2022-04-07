import React, { Component } from 'react'

const PrefFaculty  = ({ nextStep, prevStep, handleChange, values}) => { 

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
    
    const Previous = e => {
        e.preventDefault();
        prevStep();
    }
    return (
        <div className="App">
        <ul>
          <li><a>Welcome Suraj Shah</a></li>
            <li><a>Time Table</a></li>
            <li><a>Faculty List</a></li>
  
          </ul>
        <header className="App-header">
          
          <img src={require('./logo.png')} className="Login-logo" alt="logo" />
          <p>
            Enter Information
          </p>
          <form class = "Login-form"  >
              
              <div class="dropdown">
                <span>Preferred Faculty</span>
                <div class="dropdown-content">
                  <p><a href='#'>Prof. R Jothi</a></p>
                  <p><a href='#'>Prof. Ganala Santoshi</a></p>
                </div>
              </div>
              <div class="navbuttons">
              <button onClick={ Continue }>Next</button>
              <button onClick={ Previous }>Back</button>
              </div>
      </form>
        </header>
        
      </div>
    )
 }

 export default PrefFaculty



