export default function Themes() {
  return (
    <div className="p-10">
      <h1 className="text-center text-2xl font-semibold md:text-left">
        Let's test those theme colors!
      </h1>

      <div className="mt-8 space-y-4">
        {/* Default theme */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex overflow-hidden rounded-md">
            <div className="h-10 w-10 bg-theme-one-50"></div>
            <div className="h-10 w-10 bg-theme-one-100"></div>
            <div className="h-10 w-10 bg-theme-one-200"></div>
            <div className="h-10 w-10 bg-theme-one-300"></div>
            <div className="h-10 w-10 bg-theme-one-400"></div>
            <div className="h-10 w-10 bg-theme-one-500"></div>
            <div className="h-10 w-10 bg-theme-one-600"></div>
            <div className="h-10 w-10 bg-theme-one-700"></div>
            <div className="h-10 w-10 bg-theme-one-800"></div>
            <div className="h-10 w-10 bg-theme-one-900"></div>
          </div>
          <p className="font-medium text-theme-one-900">900</p>
          <p className="font-medium text-theme-one-700">700</p>
          <p className="font-medium text-theme-one-500">500</p>
          <p className="font-medium text-theme-one-300">300</p>
        </div>

        {/* Theme 1 */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex overflow-hidden rounded-md">
            <div className="h-10 w-10 bg-theme-two-50"></div>
            <div className="h-10 w-10 bg-theme-two-100"></div>
            <div className="h-10 w-10 bg-theme-two-200"></div>
            <div className="h-10 w-10 bg-theme-two-300"></div>
            <div className="h-10 w-10 bg-theme-two-400"></div>
            <div className="h-10 w-10 bg-theme-two-500"></div>
            <div className="h-10 w-10 bg-theme-two-600"></div>
            <div className="h-10 w-10 bg-theme-two-700"></div>
            <div className="h-10 w-10 bg-theme-two-800"></div>
            <div className="h-10 w-10 bg-theme-two-900"></div>
          </div>
          <p className="font-medium text-theme-two-900">900</p>
          <p className="font-medium text-theme-two-700">700</p>
          <p className="font-medium text-theme-two-500">500</p>
          <p className="font-medium text-theme-two-300">300</p>
        </div>

        {/* Theme 2 */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex overflow-hidden rounded-md">
            <div className="h-10 w-10 bg-theme-three-50"></div>
            <div className="h-10 w-10 bg-theme-three-100"></div>
            <div className="h-10 w-10 bg-theme-three-200"></div>
            <div className="h-10 w-10 bg-theme-three-300"></div>
            <div className="h-10 w-10 bg-theme-three-400"></div>
            <div className="h-10 w-10 bg-theme-three-500"></div>
            <div className="h-10 w-10 bg-theme-three-600"></div>
            <div className="h-10 w-10 bg-theme-three-700"></div>
            <div className="h-10 w-10 bg-theme-three-800"></div>
            <div className="h-10 w-10 bg-theme-three-900"></div>
          </div>
          <p className="font-medium text-theme-three-900">900</p>
          <p className="font-medium text-theme-three-700">700</p>
          <p className="font-medium text-theme-three-500">500</p>
          <p className="font-medium text-theme-three-300">300</p>
        </div>
      </div>

      {/* "Real" theming */}
      <div className="mt-16 flex gap-4">
        <div data-theme="default" className="h-10 w-10 rounded bg-primary-500"></div>
        <div data-theme="ocean" className="h-10 w-10 rounded bg-primary-500"></div>
        <div data-theme="pink" className="h-10 w-10 rounded bg-primary-500"></div>
      </div>
    </div>
  )
}
