import Register from "components/SignUp"
import React from "react"
import { Link } from "react-router-dom"

const RegisterPage = () => {
	return (
		<div className='container'>
			<h1>Register</h1>

			<Register />

			<p>
				Or <Link to='/login'>login</Link>
			</p>
		</div>
	)
}

export default RegisterPage
