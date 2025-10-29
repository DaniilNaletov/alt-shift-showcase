import cx from 'clsx'

import cm from './Spinner.module.css'

const getAngleVector = (shift: number, angle: number) => {
  const radian = angle * (Math.PI / 180)
  return {
    x: shift * (Math.round(Math.cos(radian) * 1000) / 1000),
    y: shift * (Math.round(Math.sin(radian) * 1000) / 1000),
  }
}

const Sizes = {
  xs: {
    size: 16,
    lineWidth: 5,
    lineHeight: 2,
    radius: 3,
  },
  sm: {
    size: 24,
    lineWidth: 7,
    lineHeight: 3,
    radius: 5,
  },
  md: {
    size: 40,
    lineWidth: 10,
    lineHeight: 4,
    radius: 8,
  },
}

const Spinner: React.FC<{ sm?: boolean; xs?: boolean; className?: string }> = ({
  sm,
  xs,
  className,
}) => {
  const count = 8

  const { size, lineWidth, lineHeight, radius } = xs ? Sizes.xs : sm ? Sizes.sm : Sizes.md

  const centerXY = size / 2

  const duration = 1.6

  return (
    <div className={cx('inline-flex shrink-0', className)}>
      <div className="relative" style={{ width: `${size}px`, height: `${size}px` }}>
        {Array.from({ length: count }).map((_, i) => {
          const angle = (360 / count) * i
          const { x, y } = getAngleVector(radius, angle)

          return (
            <div
              key={i}
              className={cx('absolute top-0 left-0 rounded-full bg-current', cm.segment)}
              style={{
                // @ts-expect-error Css Variable
                '--ss-width': `${lineWidth}px`,
                width: `${lineWidth}px`,
                height: `${lineHeight}px`,
                transform: `translate(${x + centerXY}px, ${
                  y + centerXY - lineHeight / 2
                }px) rotate(${angle}deg)`,
                transformOrigin: 'left center',
                animationDelay: `${i * (duration / count)}s`,
                animationDuration: `${duration}s`,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Spinner
