import { OAuth2Client } from 'google-auth-library'

export const loginRouter = (app) => {
	
	app.post('/api/v1/auth/google', async (req, res) => {
		console.log(process.env.REACT_APP_CLIENT_API_KEY)
		const client = new OAuth2Client(process.env.REACT_APP_CLIENT_API_KEY, process.env.REACT_APP_SECRET_API_KEY)

		const ticket = await client.verifyIdToken({
			
			idToken : req.body.tokenId,
			audience: process.env.REACT_APP_GOOGLE_CLIENT_API_KEY

		})

		const { name, email, picture } = ticket.getPayload();

		const user = { email: '', name: '', picture: '' }

		user.email   = email
		user.name    = name
		user.picture = picture

		res.status(201)
		res.json(user)

	})

	app.get('/api/v1/auth/google/getGoogleKeyClient', async (req, res) => {

		console.log('api back')
		console.log(process.env.REACT_APP_CLIENT_API_KEY)
		res.status(201)
		res.json('694897874966-7h3o2k7fa0drtm59kh74ukr3hg37f57k.apps.googleusercontent.com')

	})

}