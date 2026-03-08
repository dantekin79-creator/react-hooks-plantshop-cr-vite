import { vi } from 'vitest'

global.fetch = vi.fn()

global.setFetchResponse = (data) => {
  global.fetch.mockResolvedValue({
    json: () => Promise.resolve(data)
  })
}
