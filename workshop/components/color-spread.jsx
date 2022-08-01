const lookup = {
  pink: {
    50: 'bg-pink-50 text-pink-900',
    100: 'bg-pink-100 text-pink-900',
    200: 'bg-pink-200 text-pink-900',
    300: 'bg-pink-300 text-pink-900',
    400: 'bg-pink-400 text-pink-50',
    500: 'bg-pink-500 text-pink-50',
    600: 'bg-pink-600 text-pink-50',
    700: 'bg-pink-700 text-pink-50',
    800: 'bg-pink-800 text-pink-50',
    900: 'bg-pink-900 text-pink-50',
  },
  cyan: {
    50: 'bg-cyan-50 text-cyan-900',
    100: 'bg-cyan-100 text-cyan-900',
    200: 'bg-cyan-200 text-cyan-900',
    300: 'bg-cyan-300 text-cyan-900',
    400: 'bg-cyan-400 text-cyan-50',
    500: 'bg-cyan-500 text-cyan-50',
    600: 'bg-cyan-600 text-cyan-50',
    700: 'bg-cyan-700 text-cyan-50',
    800: 'bg-cyan-800 text-cyan-50',
    900: 'bg-cyan-900 text-cyan-50',
  },
  emerald: {
    50: 'bg-emerald-50 text-emerald-900',
    100: 'bg-emerald-100 text-emerald-900',
    200: 'bg-emerald-200 text-emerald-900',
    300: 'bg-emerald-300 text-emerald-900',
    400: 'bg-emerald-400 text-emerald-50',
    500: 'bg-emerald-500 text-emerald-50',
    600: 'bg-emerald-600 text-emerald-50',
    700: 'bg-emerald-700 text-emerald-50',
    800: 'bg-emerald-800 text-emerald-50',
    900: 'bg-emerald-900 text-emerald-50',
  },
  primary: {
    50: 'bg-primary-50 text-primary-900',
    100: 'bg-primary-100 text-primary-900',
    200: 'bg-primary-200 text-primary-900',
    300: 'bg-primary-300 text-primary-900',
    400: 'bg-primary-400 text-primary-50',
    500: 'bg-primary-500 text-primary-50',
    600: 'bg-primary-600 text-primary-50',
    700: 'bg-primary-700 text-primary-50',
    800: 'bg-primary-800 text-primary-50',
    900: 'bg-primary-900 text-primary-50',
  },
}

export function ColorSpread({ color: spreadColor, ...props }) {
  const color = lookup[spreadColor]
  return (
    <div className="flex flex-wrap items-center gap-6" {...props}>
      <div className="flex overflow-hidden rounded-md">
        {Object.keys(color).map((key) => (
          <div
            key={`${color}-${key}`}
            className={`grid h-16 w-16 place-items-end p-1 font-semibold leading-none ${color[key]}`}
          >
            {key}
          </div>
        ))}
      </div>
    </div>
  )
}
