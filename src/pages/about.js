import Page from '@/components/page'
import Main from '@/components/main'
import Title from '@/components/title'

const colors = [
  { name: 'Yellow', hex: '#ffc600', light: true },
  { name: 'Orange', hex: '#ff9d00', light: true },
  { name: 'Mint', hex: '#2affdf', light: true },
  { name: 'Blue', hex: '#193549', light: false },
  { name: 'Off Blue', hex: '#0d3A58', light: false },
  { name: 'Dusty Blue', hex: '#35434d', light: false },
  { name: 'Dark Blue', hex: '#15232d', light: false },
  { name: 'Pink', hex: '#fB94ff', light: true },
  { name: 'Light Blue', hex: '#9effff', light: true },
]

const About = () => (
  <Page title="about">
    <Main className="flex flex-col px-4 space-y-4 text-center">
      <Title>about</Title>
      <ul className="flex justify-center space-x-4 text-2xl text-cobalt sm:text-3xl md:block">
        <li>
          <a
            className="font-semibold hover:underline"
            href="https://github.com/b4conjuice"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </li>
        <li>
          <a
            className="font-semibold hover:underline"
            href="https://twitter.com/b4conjuice"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </a>
        </li>
      </ul>
      <h2>
        theme:{' '}
        <a
          className="font-semibold hover:underline"
          href="https://github.com/wesbos/cobalt2"
          target="_blank"
          rel="noopener noreferrer"
        >
          cobalt2
        </a>
      </h2>
      <ul className="grid grid-cols-2 gap-4 text-2xl text-cobalt sm:text-3xl md:max-w-4xl md:mx-auto">
        {colors.map(({ name, hex, light }) => (
          <li
            key={name}
            className={`shadow rounded-lg ${
              light
                ? `bg-cobalt hover:bg-cb-off-blue ${
                    name === 'Yellow'
                      ? 'text-cb-yellow'
                      : name === 'Orange'
                      ? 'text-cb-orange'
                      : name === 'Mint'
                      ? 'text-cb-mint'
                      : name === 'Pink'
                      ? 'text-cb-pink'
                      : name === 'Light Blue'
                      ? 'text-cb-light-blue'
                      : 'text-gray-100'
                  }`
                : `text-gray-100 hover:bg-blue-900 ${
                    name === 'Blue'
                      ? 'bg-cb-blue'
                      : name === 'Off Blue'
                      ? 'bg-cb-off-blue'
                      : name === 'Dusty Blue'
                      ? 'bg-cb-dusty-blue'
                      : name === 'Dark Blue'
                      ? 'bg-cb-dark-blue'
                      : 'bg-cobalt'
                  }`
            }`}
          >
            <button className="p-4" type="button">
              <div>{name}</div>
              <div>{hex}</div>
            </button>
          </li>
        ))}
      </ul>
    </Main>
  </Page>
)

export default About
