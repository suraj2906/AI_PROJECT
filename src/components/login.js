import '../App.css'

import React, { Component } from 'react'
import PrefferedSlot from './prefferedSlot'
import PrefferedUE from './prefferedUE'
import PrefFaculty from './prefFaculty'
import Success from './success'


export default class Login extends Component {

  state={
    step: 1,
    prefSlot: '',
  }
  
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }



  render() {
    const { step } = this.state;
    const { prefUE  } = this.state;
    const values = { prefUE }

    switch (step) {
      case 1: 
        return (
          <PrefferedSlot

          nextStep={ this.nextStep }
          handleChange={this.handleChange}
          values={ values }  
          />
        )
      case 2: 
        return (
          <PrefferedUE 
          prevStep={ this.prevStep }
          nextStep={ this.nextStep }
          handleChange={this.handleChange}
          values={ values }  
          />
        )
      case 3: 
        return (
          <PrefFaculty 
          prevStep={ this.prevStep }
          nextStep={ this.nextStep }
          handleChange={this.handleChange}
          values={ values }  
          />
        )
      case 4:
        return (
          <Success />)
      // never forget the default case, otherwise VS code would be mad!
      default: 
        
         // do nothing
    }
  }
}




// function Login() {
//   return (
//     <div className="App">
//       <ul>
//         <li><a>Welcome Suraj Shah</a></li>
//           <li><a href={Login}>Time Table</a></li>
//           <li><a>Faculty List</a></li>

//         </ul>
//       <header className="App-header">
        
//         <img src={require('./logo.png')} className="Login-logo" alt="logo" />
//         <p>
//           Enter Information
//         </p>
//         <form class = "Login-form"  >
            
//             <div class="dropdown">
//               <span>Preffered Slot</span>
//               <div class="dropdown-content">
//                 <p>Morning Theory</p>
//                 <p>Evening Theory</p>
//               </div>
//             </div>
            
//             <button type="submit" name='submit'>Next</button>
//     </form>
//       </header>
      
//     </div>
//   );
// }
