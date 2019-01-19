import { mount, shallow } from 'enzyme'
import { ThemeProvider } from 'emotion-theming'
import React from 'react'
import HeroHeader from './HeroHeader'

describe('<HeroHeader />', () => {
    let wrapper

    it('renders the title wrapped in an h1', () => {
        wrapper = shallow(<HeroHeader title="This is the title" />)

        expect(wrapper).toMatchInlineSnapshot(`
<Styled(header)>
  <Styled(h1)>
    This is the title
  </Styled(h1)>
</Styled(header)>
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
<Styled(header)>
  <Styled(h1)>
    This is the title
  </Styled(h1)>
  <Styled(h2)>
    This is the subtitle
  </Styled(h2)>
</Styled(header)>
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
.emotion-1 {
  background: backgroundColor;
  background: linear-gradient( 0deg, backgroundColor 0%, rgba(0,0,0,0) );
  padding: 180px 0;
  position: relative;
}

.emotion-1:before {
  background: primaryColor;
  content: '';
  position: absolute;
  -webkit-transition: background 0.3s;
  transition: background 0.3s;
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
  <Styled(header)>
    <header
      className="emotion-1"
    >
      <Styled(h1)>
        <h1
          className="emotion-0"
        >
          This is the title
        </h1>
      </Styled(h1)>
    </header>
  </Styled(header)>
</HeroHeader>
`)
    })
})
