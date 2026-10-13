import express, { type Request, type Response } from 'express'
import morgan from 'morgan'

export const app = express()
const PORT = 3000

app.use(morgan('dev'))

app.get('/health', (req: Request, res: Response) => {
  res.send('ok')
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

export default app
