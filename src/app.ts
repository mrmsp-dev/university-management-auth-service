import express, { Application } from 'express'
import cors from 'cors'
// import usersRoute from './app/modules/users/user.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'

const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application routes

app.use('/api/v1/users', UserRoutes)

//Testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('Testing error Logger')
// })
//   res.send('Working Sucessfully!')

app.use(globalErrorHandler)

export default app
// getting-started.js
// const mongoose = require('mongoose');
