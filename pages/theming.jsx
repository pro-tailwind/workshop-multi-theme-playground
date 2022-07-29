export default function ThemingPage() {
  return (
    <div className="mx-auto mt-24 max-w-7xl">
      <div className="p-10">
        <div className="prose max-w-none xl:prose-xl">
          <h1>Muli-theme support in Tailwind CSS</h1>

          <p>We're starting off with two custom colors added to our Tailwind config file</p>

          <div className="mt-8 space-y-4">
            <div>
              <div data-theme="default" className="flex flex-wrap items-center gap-6">
                <div className="flex overflow-hidden rounded-md">
                  <div className="grid h-16 w-16 place-items-end bg-default-50 p-1 font-semibold leading-none text-default-900">
                    50
                  </div>
                  <div className="grid h-16 w-16 place-items-end bg-default-100 p-1 font-semibold leading-none text-default-900">
                    100
                  </div>
                  <div className="grid h-16 w-16 place-items-end bg-default-200 p-1 font-semibold leading-none text-default-900">
                    200
                  </div>
                  <div className="grid h-16 w-16 place-items-end bg-default-300 p-1 font-semibold leading-none text-default-900">
                    300
                  </div>
                  <div className="grid h-16 w-16 place-items-end bg-default-400 p-1 font-semibold leading-none text-default-50">
                    400
                  </div>
                  <div className="grid h-16 w-16 place-items-end bg-default-500 p-1 font-semibold leading-none text-default-50">
                    500
                  </div>
                  <div className="grid h-16 w-16 place-items-end bg-default-600 p-1 font-semibold leading-none text-default-50">
                    600
                  </div>
                  <div className="grid h-16 w-16 place-items-end bg-default-700 p-1 font-semibold leading-none text-default-50">
                    700
                  </div>
                  <div className="grid h-16 w-16 place-items-end bg-default-800 p-1 font-semibold leading-none text-default-50">
                    800
                  </div>
                  <div className="grid h-16 w-16 place-items-end bg-default-900 p-1 font-semibold leading-none text-default-50">
                    900
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div data-theme="default" className="flex flex-wrap items-center gap-6">
                <div className="flex overflow-hidden rounded-md">
                  <div className="grid h-16 w-16 place-items-end bg-rainforest-50 p-1 font-semibold leading-none text-rainforest-900">
                    50
                  </div>
                  <div className="grid h-16 w-16 place-items-end bg-rainforest-100 p-1 font-semibold leading-none text-rainforest-900">
                    100
                  </div>
                  <div className="grid h-16 w-16 place-items-end bg-rainforest-200 p-1 font-semibold leading-none text-rainforest-900">
                    200
                  </div>
                  <div className="grid h-16 w-16 place-items-end bg-rainforest-300 p-1 font-semibold leading-none text-rainforest-900">
                    300
                  </div>
                  <div className="grid h-16 w-16 place-items-end bg-rainforest-400 p-1 font-semibold leading-none text-rainforest-50">
                    400
                  </div>
                  <div className="grid h-16 w-16 place-items-end bg-rainforest-500 p-1 font-semibold leading-none text-rainforest-50">
                    500
                  </div>
                  <div className="grid h-16 w-16 place-items-end bg-rainforest-600 p-1 font-semibold leading-none text-rainforest-50">
                    600
                  </div>
                  <div className="grid h-16 w-16 place-items-end bg-rainforest-700 p-1 font-semibold leading-none text-rainforest-50">
                    700
                  </div>
                  <div className="grid h-16 w-16 place-items-end bg-rainforest-800 p-1 font-semibold leading-none text-rainforest-50">
                    800
                  </div>
                  <div className="grid h-16 w-16 place-items-end bg-rainforest-900 p-1 font-semibold leading-none text-rainforest-50">
                    900
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div data-theme="ocean" className="flex flex-wrap items-center gap-6">
                <div className="flex overflow-hidden rounded-md">
                  <div className="grid h-16 w-16 place-items-end bg-candy-50 p-1 font-semibold leading-none text-candy-900">
                    50
                  </div>
                  <div className="grid h-16 w-16 place-items-end bg-candy-100 p-1 font-semibold leading-none text-candy-900">
                    100
                  </div>
                  <div className="grid h-16 w-16 place-items-end bg-candy-200 p-1 font-semibold leading-none text-candy-900">
                    200
                  </div>
                  <div className="grid h-16 w-16 place-items-end bg-candy-300 p-1 font-semibold leading-none text-candy-900">
                    300
                  </div>
                  <div className="grid h-16 w-16 place-items-end bg-candy-400 p-1 font-semibold leading-none text-candy-50">
                    400
                  </div>
                  <div className="grid h-16 w-16 place-items-end bg-candy-500 p-1 font-semibold leading-none text-candy-50">
                    500
                  </div>
                  <div className="grid h-16 w-16 place-items-end bg-candy-600 p-1 font-semibold leading-none text-candy-50">
                    600
                  </div>
                  <div className="grid h-16 w-16 place-items-end bg-candy-700 p-1 font-semibold leading-none text-candy-50">
                    700
                  </div>
                  <div className="grid h-16 w-16 place-items-end bg-candy-800 p-1 font-semibold leading-none text-candy-50">
                    800
                  </div>
                  <div className="grid h-16 w-16 place-items-end bg-candy-900 p-1 font-semibold leading-none text-candy-50">
                    900
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
