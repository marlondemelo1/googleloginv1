import React, { useContext } from 'react'
import GoogleLogin from 'react-google-login';
import http from '../../../http-common';
import UserContext from '../../../context/UserContext';

const UserFormLogin = () => {

	const userContext = useContext(UserContext)

	const handleLogin = async googleData => {

		http.post('/api/v1/auth/google', {

			tokenId: googleData.tokenId

		}).then(resp => {

			console.log(resp.data)

			userContext.name     = resp.data.name
			userContext.email    = resp.data.email
			userContext.picture  = resp.data.picture
			userContext.islogged = true			

			userContext.userLogin()

			console.log(userContext)			

		})

	}

	return (
			<GoogleLogin

				clientId     = {process.env.REACT_APP_CLIENT_API_KEY}
				buttonText   = 'Log in with Google'
				onSuccess    = {handleLogin}
				onFailure    = {handleLogin}
				cookiePolicy = {'single_host_origin'}>

			</GoogleLogin>
	) // Return

} // UserFormLogin

export default UserFormLogin