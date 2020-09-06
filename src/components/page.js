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
    <div className="flex flex-col min-h-screen text-gray-900 bg-gray-100">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="msapplication-starturl" content="/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta charSet="utf-8" />
        <meta name="description" content="with bacon" />
        <meta name="theme-color" content="#193549" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icon.png" />
        <link
          href="splash.png"
          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
          rel="apple-touch-startup-image"
        />
        <title>
          {title === DEFAULT_TITLE ? title : `${title} - ${DEFAULT_TITLE}`}
        </title>
      </Head>
      <header>
        <nav className="px-2 py-1 text-lg">
          <ul className="flex justify-center space-x-3 text-cobalt">
            {nav.map(({ url, text }) => (
              <li
                key={url}
                className={
                  pathname === url || pathname.includes(`${url}/`)
                    ? 'border-b-2 border-cobalt'
                    : 'hover:border-b-2 hover:border-cobalt'
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
    </div>
  )
}

export default Page
