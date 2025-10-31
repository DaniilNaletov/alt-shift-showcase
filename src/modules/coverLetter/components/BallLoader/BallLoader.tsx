import cx from 'clsx'

import cm from './BallLoader.module.css'
import { ReactComponent as IllustrationBall } from './IllustrationBall.svg'

const BallLoader: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cx('', className)}>
      <IllustrationBall className={cm.ball} />
    </div>
  )
}

export default BallLoader
