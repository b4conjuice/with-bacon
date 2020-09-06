import Page from '@/components/page'
import Main from '@/components/main'
import Title from '@/components/title'

const Home = () => (
  <Page>
    <Main className="flex flex-col space-y-4">
      <Title>
        <a
          className="hover:underline"
          href="https://github.com/b4conjuice/with-bacon"
        >
          with bacon{' '}
          <span role="img" aria-label="bacon">
            🥓
          </span>
        </a>
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
      <p className="text-2xl text-center text-cobalt sm:text-3xl">
        <img
          className="inline w-8 h-8 rounded-full"
          src="/icon.png"
          alt="bacon"
        />{' '}
        icon from{' '}
        <a
          className="font-semibold hover:underline"
          href="https://buildicon.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          buildicon
        </a>
      </p>
    </Main>
  </Page>
)

export default Home
