import React from 'react'

const PrefferedSlot = ({ nextStep, handleChange, values}) => {

    const Continue = e => {
        e.preventDefault();
        nextStep();
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
                <span>Preffered Slot</span>
                <div class="dropdown-content">
                  <p><a href='#'>Morning Theory</a></p>
                  <p><a href='#'>Evening Theory</a></p>
                </div>
              </div>
              
              <button onClick={ Continue }>Next</button>
              

      </form>
        </header>
        
      </div>
  )
}


export default PrefferedSlot