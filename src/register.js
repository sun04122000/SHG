import { useState } from 'react'
import {Sidebar} from './sidebar';
import {Footer}from './footer';
import {Navigationbar} from './navbar'
import { Button } from 'react-bootstrap';
function Register() {
	

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

		const data = await response.json()
		alert('Registration Succeful Kindly ')
		window.location.href='/shop'
		console.log(data)
	}

	return (
	
            <div className='registerDiv'>
			<img src="images/Background-images/Registration_Left.png" alt="" title='registration' className='register_img'/>
			<div className='registerForm'>
			<form onSubmit={registerUser} >
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Name"
					className='reg-input'
				/>
				<br />
				<hr className='reg-hr'/>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
					className='reg-input'
				/>

				<br />
				<hr className='reg-hr'/>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="PASSWORD"
					className='reg-input'
				/>
				<br />
				<hr className='reg-hr'/>
				<Button type="submit" className="registerButton reg-input">Register</Button>
			</form>
			<Button href='/login' className="loginButton reg-input">Login</Button>
			</div>
            </div>
		
	)
}

export default Register