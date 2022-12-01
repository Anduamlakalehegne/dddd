import React from 'react'
import './signin.css';

export default function () {
	return (

			// Login page Form

			<div className="container">
				<div className="contact-box">
					<div className="left">
					</div>
					<div className="right">
						<h2>Welcome To Bazra</h2>
						<lable><b>User Name</b></lable>
						<input type="text" className="field" placeholder="Username"></input>
						<lable><b>Password</b></lable>
						<input type="password" className="field" placeholder="Password"></input>
						<b><a href='#' className='forget'>Forget Password?</a></b>
						<button className="btn">Sign In</button>
					</div>
				</div>
			</div>
		)
	}


