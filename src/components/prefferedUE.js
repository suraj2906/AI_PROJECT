import React from 'react'

const PrefferedUE = ({nextStep, prevStep, handleChange, values}) => {
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
                <span>Preffered University Elective</span>
                <div class="dropdown-content">
                  <p><a href='#'>Investment Analysis and Portfolio Management</a></p>
                  <p><a href='#'>Social Marketing</a></p>
                </div>
              </div>
              <div class="navbuttons">
              <button onClick={ Previous }>Back</button>
              <button onClick={ Continue }>Next</button>
              </div>

      </form>
        </header>
        
      </div>
    )
 }


export default PrefferedUE