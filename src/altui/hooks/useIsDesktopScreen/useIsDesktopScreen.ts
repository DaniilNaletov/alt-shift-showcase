import useMediaQuery from '../useMediaQuery/useMediaQuery'

const DESKTOP_SCREEN_WIDTH = '768px'

const useIsDesktopScreen = () => {
  const isDesktop = useMediaQuery(`(min-width: ${DESKTOP_SCREEN_WIDTH})`)

  return isDesktop
}

export default useIsDesktopScreen
