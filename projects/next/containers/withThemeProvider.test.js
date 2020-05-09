import { mount } from 'enzyme'
import React from 'react'
import { act } from 'react-dom/test-utils'

import withThemeProvider from './withThemeProvider'

jest.mock('../lib/theme', () => ({
    getTheme: () => ({
        test: true,
    }),
}))

describe('<withThemeProvider />', () => {
    let wrapper, Component, ThemeProvider
    beforeEach(() => {
        act(() => {
            jest.useFakeTimers()

            Component = () => 'test'

            ThemeProvider = withThemeProvider(Component)

            wrapper = mount(
                <ThemeProvider>
                    <></>
                </ThemeProvider>,
            )

            jest.runTimersToTime(72e5)
        })
    })

    it('renders a theme based on the current time', () => {
        expect(wrapper).toMatchInlineSnapshot(`
<withThemeProvider(App)>
  <ThemeProvider
    theme={
      Object {
        "test": true,
      }
    }
  >
    <Component>
      test
    </Component>
  </ThemeProvider>
</withThemeProvider(App)>
`)
    })

    it('time and timezone are undefined in the browser', async () => {
        const { browser } = process

        process.browser = true

        const props = await ThemeProvider.getInitialProps()

        expect(props).toMatchObject({
            serverTime: undefined,
            serverTimezoneOffset: undefined,
        })

        process.browser = browser
    })

    it('gets time and timezone from the server', async () => {
        const props = await ThemeProvider.getInitialProps()

        expect(props).toMatchObject({
            serverTime: expect.any(Number),
            serverTimezoneOffset: expect.any(Number),
        })
    })

    it('gets app props if getInitialProps is defined', async () => {
        const appProps = {}

        Component.getInitialProps = async () => appProps

        const props = await ThemeProvider.getInitialProps()

        expect(props.appProps).toBe(appProps)
    })
})
