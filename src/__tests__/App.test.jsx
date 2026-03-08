import { vi } from 'vitest'
import './test_suites/AllPlants.test'
import './test_suites/CreatePlant.test'
import './test_suites/InStock.test'
import './test_suites/SearchPlants.test'

// Setup fetch mock for tests
global.fetch = vi.fn()
global.setFetchResponse = (data) => {
  global.fetch.mockResolvedValue({
    json: () => Promise.resolve(data)
  })
}