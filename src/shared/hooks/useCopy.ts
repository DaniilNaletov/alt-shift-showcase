import { useEffect, useRef, useState } from 'react'

import copyToClipboard from '../helpers/copyToClipboard'

const DELAY = 1000

const useCopy = () => {
  const [isCopied, setIsCopied] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const copy = async (text?: string) => {
    if (!text) {
      return
    }

    setIsCopied(true)

    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(() => setIsCopied(false), DELAY)

    await copyToClipboard(text)
  }

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [])

  return { isCopied, copy }
}

export default useCopy
