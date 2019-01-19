import { mount } from 'enzyme'
import React from 'react'

import ThemeProvider from './ThemeProvider'

jest.mock('../lib/theme', () => ({
    getTheme: () => ({
        test: true,
    }),
}))

describe('<ThemeProvider />', () => {
    let wrapper
    beforeEach(() => {
        jest.useFakeTimers()

        wrapper = mount(
            <ThemeProvider>
                <></>
            </ThemeProvider>,
        )

        jest.runTimersToTime(1e10)
    })

    it('renders a theme based on the current time', () => {
        expect(wrapper).toMatchInlineSnapshot(`
<ThemeProvider>
  <ThemeProvider
    theme={
      Object {
        "test": true,
      }
    }
  />
</ThemeProvider>
`)
    })
})
