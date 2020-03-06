import { useState, useLayoutEffect } from 'react'

export default function useCounter(delay: number) {
  const [count, setCount] = useState(0)

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1)
    }, delay)
    return () => clearInterval(interval)
  }, [])

  return count
}
