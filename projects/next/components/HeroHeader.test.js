import { render as r } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import React from 'react'
import HeroHeader from './HeroHeader'

describe('<HeroHeader />', () => {
    const theme = {
        colors: {
            background: 'backgroundColor',
            primary: 'primaryColor',
        },
    }

    const render = (children) =>
        r(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

    it('renders the title wrapped in an h1', () => {
        const { getByText } = render(<HeroHeader title="This is the title" />)

        expect(getByText('This is the title')).toBeInTheDocument()
    })

    it('renders the subtitle wrapped in an h2 only if it is passed', () => {
        const { getByText } = render(
            <HeroHeader
                subtitle="This is the subtitle"
                title="This is the title"
            />,
        )

        expect(getByText('This is the title')).toBeInTheDocument()
        expect(getByText('This is the subtitle')).toBeInTheDocument()
    })

    it('renders the h1 with colors if they are passed', () => {
        const { container } = render(<HeroHeader title="This is the title" />)

        expect(container).toMatchInlineSnapshot(`
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

            <div>
              <header
                class="emotion-2 emotion-3"
              >
                <h1
                  class="emotion-0 emotion-1"
                >
                  This is the title
                </h1>
                
              </header>
            </div>
        `)
    })
})
