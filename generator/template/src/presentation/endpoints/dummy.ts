// TODO: Replace this endpointi with a real one
import { createEndpoint } from '@expresso/router'
import { z } from 'zod'

export const dummy = createEndpoint({
  summary: 'Dummy endpoint',
  input: {},
  output: {
    200: { body: z.object({ ok: z.literal(true) }) }
  },
  handlers: async (_req, res) => {
    res.status(200).json({ ok: true })
  }
})
