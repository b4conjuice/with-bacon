import Page from '@/components/page'
import Title from '@/components/title'

const Home = () => (
  <Page>
    <main className="flex flex-col flex-grow space-y-4">
      <Title>
        with{' '}
        <span role="img" aria-label="bacon">
          🥓
        </span>
      </Title>
      <p className="text-2xl text-center text-cobalt sm:text-3xl">
        built with{' '}
        <a
          className="font-semibold hover:underline"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          next.js
        </a>{' '}
        and{' '}
        <a
          className="font-semibold hover:underline"
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          tailwind.css
        </a>
      </p>
    </main>
  </Page>
)

export default Home
