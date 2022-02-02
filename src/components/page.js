import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

const DEFAULT_TITLE = 'with bacon'

const nav = [
  {
    url: '/',
    text: 'home',
  },
  {
    url: '/about',
    text: 'about',
  },
]

const Page = ({ title = DEFAULT_TITLE, children }) => {
  const { pathname } = useRouter()
  return (
    <div className='flex min-h-screen flex-col bg-gray-100 text-cobalt dark:bg-cobalt dark:text-gray-100'>
      <Head>
        <link rel='manifest' href='/manifest.json' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='msapplication-starturl' content='/' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta charSet='utf-8' />
        <meta name='description' content='with bacon' />
        <meta name='theme-color' content='#193549' />
        <link rel='shortcut icon' href='/favicon.png' />
        <link rel='apple-touch-icon' sizes='57x57' href='/icon.png' />
        <link rel='apple-touch-icon' sizes='72x72' href='/icon.png' />
        <link rel='apple-touch-icon' sizes='114x114' href='/icon.png' />
        <link rel='apple-touch-icon' sizes='144x144' href='/icon.png' />
        <link
          href='splash.png'
          media='(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)'
          rel='apple-touch-startup-image'
        />
        <title>
          {title === DEFAULT_TITLE ? title : `${title} - ${DEFAULT_TITLE}`}
        </title>
      </Head>
      <header>
        <nav className='px-2 py-1 text-lg'>
          <ul className='flex justify-center space-x-3'>
            {nav.map(({ url, text }) => (
              <li
                key={url}
                className={
                  pathname === url || pathname.includes(`${url}/`)
                    ? 'border-b-2 border-cobalt dark:border-gray-100'
                    : 'hover:border-b-2 hover:border-cobalt dark:hover:border-gray-100'
                }
              >
                {pathname === url ? (
                  <span>{text}</span>
                ) : (
                  <Link href={url}>
                    <a>{text}</a>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {children}
      <footer className='bg-cobalt pb-4 text-center text-2xl text-gray-100 dark:bg-cb-dark-blue sm:text-3xl lg:pt-4'>
        <div className='lg:container lg:mx-auto lg:max-w-3xl'>
          <div>
            built{' '}
            <a
              className='font-semibold text-cb-yellow hover:underline'
              href='https://with-bacon.niel.to'
              target='_blank'
              rel='noopener noreferrer'
            >
              with bacon{' '}
              <span role='img' aria-label='bacon'>
                🥓
              </span>
            </a>
          </div>
          <ul className='flex justify-center space-x-4 text-xl'>
            <li>
              <a
                className='text-cb-pink hover:underline'
                href='https://nextjs.org'
                target='_blank'
                rel='noopener noreferrer'
              >
                next.js
              </a>
            </li>
            <li>
              <a
                className='text-cb-pink hover:underline'
                href='https://tailwindcss.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                tailwind.css
              </a>
            </li>
            <li>
              <a
                className='text-cb-pink hover:underline'
                href='https://vercel.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                vercel
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Page
