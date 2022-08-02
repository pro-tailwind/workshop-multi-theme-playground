/* 
  REVIEW:
  I think this ribbon implementation is pretty cool. 
  Would love a review though.
  You could easily add props for the position ('top-left', 'bottom-right', ...), size, etc.
  What I like is you can just change the `width` utility on the parentmost div, 
  and the ribbon size will adjust (thanks aspect-ratio).
*/
export function Ribbon() {
  return (
    <div className="absolute -right-2 -top-2 z-10 aspect-square w-32 overflow-hidden rounded-sm">
      <div className="bg-secondary-500 absolute h-2 w-2"></div>
      <div className="bg-secondary-500 absolute bottom-0 right-0 h-2 w-2"></div>
      <div className="absolute bottom-0 right-0 w-square-diagonal origin-bottom-right rotate-45">
        <a
          href="#"
          className="bg-secondary-300 flex flex-col items-center py-2.5 shadow hover:bg-yellow-300"
        >
          <span className="text-secondary-900/60 text-[10px] font-semibold uppercase leading-none tracking-wide">
            Powered by
          </span>
          <span className="text-secondary-900 font-bold leading-none">Badass.dev</span>
        </a>
      </div>
    </div>
  )
}
