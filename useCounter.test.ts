import useCounter from './useCounter'
import { renderHook, act } from '@testing-library/react-hooks'

jest.useFakeTimers()

test('Updates by time', () => {
  const delay = 100
  const { result } = renderHook(() => useCounter(delay))

  act(() => jest.advanceTimersByTime(delay))
  expect(result.current).toBe(1)
})

test('Updates by next timer', () => {
  const { result } = renderHook(() => useCounter(100))

  act(() => jest.advanceTimersToNextTimer())
  expect(result.current).toBe(1)
})
