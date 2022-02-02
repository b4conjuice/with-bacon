import Image from 'next/image'

import Page from '@/components/page'
import Main from '@/components/main'
import Title from '@/components/title'
import icon from '../../public/icon.png'

const Home = () => (
  <Page>
    <Main className='flex flex-col items-center justify-center space-y-4'>
      <Title>
        <a
          className='hover:underline'
          href='https://github.com/b4conjuice/with-bacon'
        >
          with bacon{' '}
          <span role='img' aria-label='bacon'>
            🥓
          </span>
        </a>
      </Title>
      <p className='text-center text-2xl sm:text-3xl'>
        built with{' '}
        <a
          className='font-semibold hover:underline dark:text-cb-light-blue'
          href='https://nextjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          next.js
        </a>{' '}
        and{' '}
        <a
          className='font-semibold hover:underline dark:text-cb-light-blue'
          href='https://tailwindcss.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          tailwind.css
        </a>
      </p>
      <p className='text-center text-2xl sm:text-3xl'>
        icon from{' '}
        <a
          className='font-semibold hover:underline dark:text-cb-orange'
          href='https://buildicon.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          buildicon
        </a>
      </p>
      <div className='h-8 w-8 text-center'>
        <Image
          className='rounded-full'
          src={icon}
          alt='bacon'
          // width="32"
          // height="32"
          placeholder='blur'
        />
      </div>
    </Main>
  </Page>
)

export default Home
