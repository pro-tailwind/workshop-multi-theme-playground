import { format } from 'date-fns'

export function BackgroundDecoration({ selectedDay }) {
  return (
    <div data-theme="pink" className="bg-primary-500 fixed inset-0">
      <div className="relative h-full">
        {/* Split background */}
        <div className="absolute inset-0 hidden xl:flex">
          <div className="bg-primary-500 w-1/2"></div>
          <div className="bg-primary-400 w-1/2"></div>
        </div>

        {/* Mirroring the card's side/main panel split within max-width container */}
        <div className="absolute inset-0 hidden -translate-x-4 xl:block">
          <div className="mx-auto flex h-full max-w-7xl px-8">
            <div className="bg-primary-500 w-[400px] transition-all duration-300 ease-in-out"></div>
            <div className="bg-primary-400 flex-1 transition-all duration-300 ease-in-out"></div>
          </div>
        </div>

        {/* Decorative background circles */}
        <div className="border-primary-400 absolute -left-40 -bottom-40 hidden aspect-square w-[700px] rounded-full border-[80px] xl:block"></div>
        <div className="border-primary-500 absolute left-1/4 -top-32 hidden aspect-square w-[700px] rounded-full border-[80px] xl:block"></div>
        {/* Selected day */}
        <div className="text-primary-500/50 xl:text-primary-500/50 absolute -bottom-20 -right-20 hidden text-[500px] font-extrabold tabular-nums leading-none lg:block">
          {selectedDay ? format(selectedDay, 'd') : '01'}
        </div>
      </div>
    </div>
  )
}
