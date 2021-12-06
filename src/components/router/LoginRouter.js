import React, { useState } from "react"
import { Route, BrowserRouter, Switch } from "react-router-dom"
import UserContext from '../../context/UserContext'
import UserFormLogin from '../user/form/Login'
import Me from "../user/Me"

const LoginRouter = () => {

	let userData = {
		name: '',
		email: '',
		picture: '',
		islogged: false,
		userLogin: userLogin
	}

	const [user, setUser] = useState(userData)

	return (

		<UserContext.Provider value={user}>

			<BrowserRouter basename={process.env.PUBLIC_URL}>
			
				<Switch>

					<Route path='/' exact >

						{user.islogged ? <Me /> : <UserFormLogin />}

					</Route>

				</Switch>

			</BrowserRouter>

		</UserContext.Provider>
	)

	function userLogin(){

		setUser({ name: user.name, email: user.email, picture: user.picture, islogged: user.islogged })

	}		

}

export default LoginRouter