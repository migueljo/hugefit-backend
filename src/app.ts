import express, { type Request, type Response } from 'express'
import morgan from 'morgan'
import helmet from 'helmet'

export const app = express()

// app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/health', (req: Request, res: Response) => {
  res.send('ok')
})

export default app
