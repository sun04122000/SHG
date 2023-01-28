import { useState } from 'react'
import {Sidebar} from './sidebar';
import {Footer}from './footer';
import {Navigationbar} from './navbar'
import { Button } from 'react-bootstrap';
function Login() {
	
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
    const [username,setUsername] = useState('')
	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()
        if(data.user){
            alert(data.user);
            setUsername(data.user);
            window.location.href = '/shop'
        }else{
            alert("Please recheck your email and password")
            
        }
		console.log(data)
	}

	return (
		<div>
			<Navigationbar />
            <Sidebar/>
			<h1>Login</h1>
			<form onSubmit={loginUser}>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input type="submit" value="Login" />
			</form>
            <Button href='/'>Register</Button>
		</div>
	)
}
export default Login