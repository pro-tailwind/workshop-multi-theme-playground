import { SidePanel } from './side-panel'
import { MainPanel } from './main-panel'
import { Ribbon } from './ribbon'
import { BackgroundDecoration } from './background-decoration'
import { ThemeSwitcher } from '../workshop/components/theme-switcher'

export function AppShell({ children }) {
  return (
    <>
      <ThemeSwitcher />
      <div className="grid min-h-screen place-items-center">
        <BackgroundDecoration />
        <div className="mx-auto w-full max-w-5xl px-2 py-10 sm:px-6 lg:px-8 xl:max-w-7xl">
          <div className="relative">
            <Ribbon />
            <div className="grid h-full rounded-2xl bg-white shadow-lg xl:grid-cols-[400px,1fr]">
              <SidePanel />
              <MainPanel>{children}</MainPanel>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
