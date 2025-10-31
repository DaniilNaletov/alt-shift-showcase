import { ReactComponent as Logo } from './logo.svg'
import { ReactComponent as LogoMinimal } from './logo-minimal.svg'

const AltLogo: React.FC<{
  className?: string
  minimal?: boolean
}> = ({ className, minimal }) => {
  return <div className={className}>{minimal ? <LogoMinimal /> : <Logo />}</div>
}

export default AltLogo
