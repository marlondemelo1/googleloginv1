import React, {useContext} from "react";
import UserContext from '../../context/UserContext';

const Me = () => {

	const userContext = useContext(UserContext)

	return (
		<div>			
			<img src = {userContext.picture} alt='foto-perfil'/>
			<h2>{userContext.name}</h2>
			<h2>{userContext.email}</h2>
		</div>
	)

}

export default Me