import { Disclosure, Transition } from '@headlessui/react'
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline'

import cx from 'classnames'

export function Reveal({ fileName, children }) {
  return (
    <Disclosure as="div">
      {({ open }) => (
        <>
          <div className="mt-8">
            <Disclosure.Button
              className={cx(
                'group flex w-full items-center justify-between gap-4 rounded-md px-6 py-4 focus:outline-none focus:ring',
                open
                  ? 'bg-emerald-200 hover:bg-emerald-300 focus:ring-emerald-400'
                  : 'bg-yellow-200 hover:bg-yellow-300 focus:ring-yellow-400'
              )}
            >
              <span>
                {open ? 'Hide' : 'Reveal'} <code className="italic text-black/75">{fileName}</code>{' '}
                code snippet
              </span>
              <span>
                {open ? (
                  <EyeIcon className="h-8 w-8 text-emerald-600 group-hover:text-emerald-700" />
                ) : (
                  <EyeOffIcon className="h-8 w-8 text-yellow-600 group-hover:text-yellow-700" />
                )}
              </span>
            </Disclosure.Button>
            <Transition
              enter="transition ease-out"
              enterFrom="-translate-y-2"
              enterTo="translate-y-0"
              leave="transition ease-in"
              leaveFrom="opacity-1"
              leaveTo="opacity-0 scale-90"
            >
              <Disclosure.Panel className="mt-4">{children}</Disclosure.Panel>
            </Transition>
          </div>
        </>
      )}
    </Disclosure>
  )
}
