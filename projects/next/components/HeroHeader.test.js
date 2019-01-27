import { mount, shallow } from 'enzyme'
import { ThemeProvider } from 'emotion-theming'
import React from 'react'
import HeroHeader from './HeroHeader'

describe('<HeroHeader />', () => {
    let wrapper

    it('renders the title wrapped in an h1', () => {
        wrapper = shallow(<HeroHeader title="This is the title" />)

        expect(wrapper).toMatchInlineSnapshot(`
<Header>
  <H1>
    This is the title
  </H1>
</Header>
`)
    })

    it('renders the subtitle wrapped in an h2 only if it is passed', () => {
        wrapper = shallow(
            <HeroHeader
                subtitle="This is the subtitle"
                title="This is the title"
            />,
        )

        expect(wrapper).toMatchInlineSnapshot(`
<Header>
  <H1>
    This is the title
  </H1>
  <H2>
    This is the subtitle
  </H2>
</Header>
`)
    })

    it('renders the h1 with colors if they are passed', () => {
        const theme = {
            colors: {
                background: 'backgroundColor',
                primary: 'primaryColor',
            },
        }
        wrapper = mount(
            <ThemeProvider theme={theme}>
                <HeroHeader title="This is the title" />
            </ThemeProvider>,
        )

        expect(wrapper.find(HeroHeader)).toMatchInlineSnapshot(`
.emotion-2 {
  background: backgroundColor;
  background: linear-gradient( 0deg,backgroundColor 0%,rgba(0,0,0,0) );
  padding: 180px 90px;
  position: relative;
}

.emotion-2:before {
  background: primaryColor;
  content: '';
  position: absolute;
  -webkit-transition: background 2s ease-in-out;
  transition: background 2s ease-in-out;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.emotion-0 {
  font-size: 4em;
  font-size: 16vw;
  font-weight: 900;
  text-align: center;
}

@media screen and (min-width:600px) {
  .emotion-0 {
    font-size: 6em;
  }
}

<HeroHeader
  subtitle=""
  title="This is the title"
>
  <Header>
    <header
      className="emotion-2 emotion-3"
    >
      <H1>
        <h1
          className="emotion-0 emotion-1"
        >
          This is the title
        </h1>
      </H1>
    </header>
  </Header>
</HeroHeader>
`)
    })
})
