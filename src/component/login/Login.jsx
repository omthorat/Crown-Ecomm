import './login.css'
function Login(){

    return(<>
        <div className="logincontainer">
        <div className="loginwrapper">
        <div className="loginLeft">
          <h3 className='loginLogo'>NewSocial</h3>
          <span className='logindesc'> Connect With your friends, family, and World around you on NewSocial..!</span>
        </div>
        <div className="loginRight">
        <div className="loginfrom">
        <input type="Email" placeholder="Enter email" className='logininput'/>
        <input type="password" placeholder="Enter password" className='logininput'/>
        <button className='loginbtn'>Log in</button>
        <span className='forgetpass'>Forget password?</span>
        <button className='createAccountbtn'>Create a New Account</button>
        </div>
        </div>
        </div>

        </div>

    </>)
}
export default Login