import { useCallback, useEffect, useRef, useState } from 'react'

import cm from './styles.module.css'

export const useShakeAnim = () => {
  const [shakeClass, setShakeClass] = useState('')

  const mountedRef = useRef(true)
  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  const timeoutRef = useRef<number>(-1)

  const shakeIt = useCallback(() => {
    setShakeClass('')

    window.clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(() => {
      if (!mountedRef.current) {
        return
      }

      setShakeClass(cm.shake)
      timeoutRef.current = window.setTimeout(() => {
        if (!mountedRef.current) {
          return
        }

        setShakeClass('')
      }, 500)
    }, 0)
  }, [])

  return [shakeClass, shakeIt] as const
}
