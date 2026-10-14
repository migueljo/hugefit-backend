import app from './app.ts'
import env from './env.ts'

const { PORT } = env
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

export default app
