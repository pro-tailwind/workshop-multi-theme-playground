import cx from 'classnames'
import { ChevronRightIcon } from '@heroicons/react/solid'

// This Button component is not yet used in any parts of the app - trying to build the "starting point" app and accidentally started making a button in this repo 🤣

export function Button({ size = 'large', look = 'primary', noIcon = false, children, ...props }) {
  const baseStyles = 'group font-semibold'

  const colorStyles = {
    primary:
      'bg-primary-500 hover:bg-primary-600 text-white disabled:opacity-50 shadow disabled:shadow-none focus:outline-none focus:ring-primary-500 focus:ring-offset-2',
    secondary: 'bg-primary-100 hover:bg-primary-200 text-primary-700 disabled:opacity-50',
  }
  const spacingStyles = {
    small: 'px-3 py-1',
    large: 'px-5 py-3',
  }
  const radiusStyles = {
    small: 'rounded',
    large: 'rounded-md',
  }

  const iconStyles = {
    primary:
      'bg-primary-400/50 group-hover:bg-primary-500/50 group-hover:bg-stripes focus:bg-primary-400/50 overflow-hidden group-disabled:bg-transparent group-disabled:pointer-events-none',
    secondary:
      'bg-primary-200/50 group-hover:bg-primary-300/50 group-hover:bg-stripes focus:bg-primary-200/50 overflow-hidden group-disabled:bg-transparent',
  }

  if (noIcon === true) {
    return (
      <button
        className={cx(
          baseStyles,
          spacingStyles[size],
          radiusStyles[size],
          colorStyles[look],
          'hover:text-red-700'
        )}
        {...props}
      >
        {children}
      </button>
    )
  }

  return (
    <button
      className={cx(baseStyles, 'flex items-stretch', colorStyles[look], radiusStyles[size])}
      {...props}
    >
      <span className={cx(spacingStyles[size], 'shrink-0')}>{children}</span>
      <span
        className={cx(
          'grid aspect-square place-items-center rounded-r',
          size === 'small' ? 'px-1' : 'px-3',
          iconStyles[look]
        )}
      >
        <ChevronRightIcon className="h-5 w-5 text-inherit" />
      </span>
    </button>
  )
}
