export default function Themes() {
  return (
    <div className="p-10">
      <h1 className="text-center text-2xl font-semibold md:text-left">
        Let's test those theme colors!
      </h1>

      <div className="mt-8 space-y-4">
        <div data-theme="default" className="flex flex-wrap items-center gap-4">
          <div className="flex overflow-hidden rounded-md">
            <div className="h-10 w-10 bg-primary-50"></div>
            <div className="h-10 w-10 bg-primary-100"></div>
            <div className="h-10 w-10 bg-primary-200"></div>
            <div className="h-10 w-10 bg-primary-300"></div>
            <div className="h-10 w-10 bg-primary-400"></div>
            <div className="h-10 w-10 bg-primary-500"></div>
            <div className="h-10 w-10 bg-primary-600"></div>
            <div className="h-10 w-10 bg-primary-700"></div>
            <div className="h-10 w-10 bg-primary-800"></div>
            <div className="h-10 w-10 bg-primary-900"></div>
          </div>
          <p className="font-medium text-primary-900">900</p>
          <p className="font-medium text-primary-700">700</p>
          <p className="font-medium text-primary-500">500</p>
          <p className="font-medium text-primary-300">300</p>
        </div>

        <div data-theme="ocean" className="flex flex-wrap items-center gap-4">
          <div className="flex overflow-hidden rounded-md">
            <div className="h-10 w-10 bg-primary-50"></div>
            <div className="h-10 w-10 bg-primary-100"></div>
            <div className="h-10 w-10 bg-primary-200"></div>
            <div className="h-10 w-10 bg-primary-300"></div>
            <div className="h-10 w-10 bg-primary-400"></div>
            <div className="h-10 w-10 bg-primary-500"></div>
            <div className="h-10 w-10 bg-primary-600"></div>
            <div className="h-10 w-10 bg-primary-700"></div>
            <div className="h-10 w-10 bg-primary-800"></div>
            <div className="h-10 w-10 bg-primary-900"></div>
          </div>
          <p className="font-medium text-primary-900">900</p>
          <p className="font-medium text-primary-700">700</p>
          <p className="font-medium text-primary-500">500</p>
          <p className="font-medium text-primary-300">300</p>
        </div>

        <div data-theme="pink" className="flex flex-wrap items-center gap-4">
          <div className="flex overflow-hidden rounded-md">
            <div className="h-10 w-10 bg-primary-50"></div>
            <div className="h-10 w-10 bg-primary-100"></div>
            <div className="h-10 w-10 bg-primary-200"></div>
            <div className="h-10 w-10 bg-primary-300"></div>
            <div className="h-10 w-10 bg-primary-400"></div>
            <div className="h-10 w-10 bg-primary-500"></div>
            <div className="h-10 w-10 bg-primary-600"></div>
            <div className="h-10 w-10 bg-primary-700"></div>
            <div className="h-10 w-10 bg-primary-800"></div>
            <div className="h-10 w-10 bg-primary-900"></div>
          </div>
          <p className="font-medium text-primary-900">900</p>
          <p className="font-medium text-primary-700">700</p>
          <p className="font-medium text-primary-500">500</p>
          <p className="font-medium text-primary-300">300</p>
        </div>
      </div>
    </div>
  )
}
