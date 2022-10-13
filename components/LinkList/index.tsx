import Link from 'next/link'

export const LinkList = () => {
  return (
    <ul>
      <li>
        <Link href="/spoiler">
          <a>Demo App</a>
        </Link>
      </li>
      <li>
        <Link href="/make-your-tests-fail">
          <a>Make your tests fail</a>
        </Link>
      </li>
      <li>
        <Link href="/what-not-how">
          <a>Don't test implementation details</a>
        </Link>
      </li>
    </ul>)
}