import { useState, useCallback, useEffect } from 'react'

export type ScreenType = 'normal' | 'mobile'
const detectScreen = (): ScreenType => {
  if (window.innerWidth > 640) {
    return 'normal'
  } else {
    return 'mobile'
  }
}

export default useScreen
function useScreen() {
  const [screen, setScreen] = useState<ScreenType>(detectScreen())

  const resizeHandler = useCallback(() => {
    setScreen(detectScreen())
  }, [])

  useEffect(() => {
    window.addEventListener('resize', resizeHandler)
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [resizeHandler])

  return screen
}
