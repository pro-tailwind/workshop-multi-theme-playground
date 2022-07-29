import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config'

const { theme } = resolveConfig(tailwindConfig)

export function ColorSpread({ color: spreadColor, ...props }) {
  const color = theme.colors[spreadColor]
  return (
    <div className="flex flex-wrap items-center gap-6" {...props}>
      <div className="flex overflow-hidden rounded-md">
        {Object.keys(color).map((key) => (
          <div
            key={`${color}-${key}`}
            className="grid h-16 w-16 place-items-end p-1 font-semibold leading-none text-default-900"
            style={{ backgroundColor: color[key], color: key < 400 ? color[900] : color[50] }}
          >
            {key}
          </div>
        ))}
      </div>
    </div>
  )
}
