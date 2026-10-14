import { test, describe, expect } from 'bun:test'

import env from './env.ts'

describe('env.ts', () => {
  test('env.ts should export the correct variables', () => {
    expect(env.PORT).toBeDefined()
    expect(env.PORT).toBeNumber()
    // expect(env.DATABASE_URL).toBeDefined()
    // expect(env.DATABASE_URL).toBeString()
  })
})
