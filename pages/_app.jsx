import { ThemeProvider, CalendarProvider } from '../context'

import '../styles/fonts.css'
import '../styles/tailwind.css'
import '../styles/syntax-highlighting.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CalendarProvider>
        <Component {...pageProps} />
      </CalendarProvider>
    </ThemeProvider>
  )
}

export default MyApp
