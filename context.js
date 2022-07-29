import { createContext, useContext, useState } from 'react'
import { startOfToday } from 'date-fns'

import { bookingAvailabilities } from './data'

// ------------------------------
// Theme context
// ------------------------------

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [activeTheme, setActiveTheme] = useState('default')
  return (
    <ThemeContext.Provider
      value={{
        activeTheme,
        setActiveTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}

// ------------------------------
// Calendar context
// ------------------------------

const CalendarContext = createContext()

export function CalendarProvider({ children }) {
  const today = startOfToday()
  const [selectedDay, setSelectedDay] = useState(today)
  return (
    <CalendarContext.Provider value={{ selectedDay, setSelectedDay, bookingAvailabilities }}>
      {children}
    </CalendarContext.Provider>
  )
}

export function useCalendar() {
  return useContext(CalendarContext)
}
