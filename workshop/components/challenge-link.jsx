import Link from 'next/link'

export function ChallengeLink({ href, text }) {
  return (
    <Link href={href}>
      <a className="inline-block rounded-lg bg-pink-600 px-6 py-3 font-semibold text-white no-underline hover:bg-pink-500">
        {text}
      </a>
    </Link>
  )
}
