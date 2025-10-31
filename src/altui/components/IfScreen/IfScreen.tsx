import useIsDesktopScreen from '../../hooks/useIsDesktopScreen/useIsDesktopScreen'

const IfScreen: React.FC<{ mobile?: React.ReactNode; desktop?: React.ReactNode }> = ({
  mobile,
  desktop,
}) => {
  const isDesktop = useIsDesktopScreen()

  return isDesktop ? desktop : mobile
}

export default IfScreen
