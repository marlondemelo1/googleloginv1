import express 		 from 'express'
import {loginRouter} from './router/loginRouter.mjs'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', express.static(path.join(__dirname, '/build')))

const PORT = 8080;

app.listen(PORT, (req,res) => {
	
  console.log(`Server is running on port ${PORT}.`)

});

loginRouter(app)

