import dotenvFlow from 'dotenv-flow'
import z from 'zod'
dotenvFlow.config()

console.log('process.env.PORT', process.env.PORT, typeof process.env.PORT)

const envSchema = z.object({
  PORT: z.coerce.number(),
  // DATABASE_URL: z.url(),
})

export const env = z.parse(envSchema, process.env)

export default env
