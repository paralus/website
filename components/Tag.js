import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 rounded-full bg-primary-800 py-0.5 px-2 text-xs font-medium uppercase text-primary-200 hover:bg-primary-500 hover:text-white">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
