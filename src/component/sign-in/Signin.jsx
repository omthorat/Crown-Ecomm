import './signin.css'
function Signin(){

    return(<>
        <div className="signincontainer">
        <div className="signinwrapper">
        <div className="signinLeft">
          <h3 className='signinLogo'>NewSocial</h3>
          <span className='signindesc'> Connect With your friends, family, and World around you on NewSocial..!</span>
        </div>
        <div className="signinRight">
        <div className="signinfrom">
        <input type="Email" placeholder="Enter email" className='signininput'/>
        <input type="password" placeholder="new Enter password" className='signininput'/>
        <input type="password" placeholder="Confirm password" className='signininput'/>
        <button className='signinbtn'>Sign In</button>
        {/* <span className='forgetpass'>Forget password?</span>
        <button className='createAccountbtn'>Create a New Account</button> */}
        </div>
        </div>
        </div>

        </div>

    </>)
}
export default Signin