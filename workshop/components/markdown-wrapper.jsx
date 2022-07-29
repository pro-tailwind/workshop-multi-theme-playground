export function MarkdownWrapper({ children }) {
  return (
    <div className="my-24 px-4 sm:px-6 lg:px-8">
      <div className="prose prose-slate prose-pink mx-auto xl:prose-xl [&_code:where(:not(pre_code,button_code))]:mx-1 [&_code:where(:not(pre_code,button_code))]:rounded [&_code:where(:not(pre_code,button_code))]:bg-indigo-100 [&_code:where(:not(pre_code,button_code))]:px-2 [&_code:where(:not(pre_code,button_code))]:py-1 [&_code:where(:not(pre_code,button_code))]:italic [&_code:where(:not(pre_code,button_code))]:text-black/80 [&_code:where(:not(pre_code,button_code)):before]:content-none [&_code:where(:not(pre_code,button_code)):after]:content-none">
        {children}
      </div>
    </div>
  )
}
