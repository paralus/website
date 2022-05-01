import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import ReadyCta from '@/components/ReadyCta'

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <Hero />
      <Features />
      <ReadyCta />
    </>
  )
}
