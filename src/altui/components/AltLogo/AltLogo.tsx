import { ReactComponent as Logo } from './logo.svg'

const AltLogo: React.FC<{
  className?: string
}> = ({ className }) => {
  return (
    <div className={className}>
      <Logo />
    </div>
  )
}

export default AltLogo
