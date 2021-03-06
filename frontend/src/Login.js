import React from 'react';
import logo from './cselogo.jpg';
import './Login.css';

function Login() {
  return (
    <div className="Login">
      	<div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<div className="login100-pic js-tilt" data-tilt>
					<img src={logo} alt="IMG"/>
				</div>

				<form className="login100-form validate-form">
					<span className="login100-form-title">
						Teacher/Student Login
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input className="input100" type="text" name="email" placeholder="Initial/ID"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input className="input100" type="password" name="pass" placeholder="Password"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Login
						</button>
					</div>

					<div className="text-center p-t-12">
						<span className="txt1">
							Forgot &nbsp;
						</span>
						<a className="txt2" href="#">
							Password??
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
    </div>
  );
}

export default Login;
