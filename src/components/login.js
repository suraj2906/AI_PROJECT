import '../App.css'



function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./logo.png')} className="Login-logo" alt="logo" />
        <p>
          Login
        </p>
      </header>
      <form>
            <input  type="text" placeholder="Enter Email" name="email" />
            <input placeholder="Enter Password" name="password" />    
            <button type="submit">Sign in</button>
    </form>
    </div>
  );
}

export default Login;