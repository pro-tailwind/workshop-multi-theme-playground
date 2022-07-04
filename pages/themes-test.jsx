import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config'

const config = resolveConfig(tailwindConfig)

// console.log(config.theme.colors)

export default function ThemeTestPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold">Theme colors test</h1>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <div className="bg-primary-800 h-12 w-20 rounded-theme-radius"></div>
        <div className="bg-primary-500 h-12 w-20 rounded-theme-radius"></div>
        <div className="bg-primary-200 h-12 w-20 rounded-theme-radius"></div>
        <p className="text-primary-900">These are</p>
        <p className="text-primary-600 bg-whoaaa">the default</p>
        <p className="text-primary-700 theme-default:uppercase">app colors</p>
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-4" data-theme="shamrock">
        <div className="bg-primary-800 h-12 w-20 rounded-theme-radius"></div>
        <div className="bg-primary-500 h-12 w-20 rounded-theme-radius"></div>
        <div className="bg-primary-200 h-12 w-20 rounded-theme-radius"></div>
        <p className="text-primary-900">Let's try</p>
        <p className="text-primary-600">our first</p>
        <p className="text-primary-400">theme colors</p>
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-4" data-theme="bittersweet">
        <div className="bg-primary-800 h-12 w-20 rounded-theme-radius"></div>
        <div className="bg-primary-500 h-12 w-20 rounded-theme-radius"></div>
        <div className="bg-primary-200 h-12 w-20 rounded-theme-radius"></div>
        <p className="text-primary-900">Let's try</p>
        <p className="text-primary-600">our second</p>
        <p className="text-primary-400">theme colors</p>
      </div>
    </div>
  )
}
