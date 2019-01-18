import { mount } from 'enzyme'
import React from 'react'

import ThemeProvider from './ThemeProvider'

jest.mock('@grxy/next/lib/theme', () => ({
    getTheme: () => ({
        test: true,
    }),
}))

describe('<ThemeProvider />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = mount(
            <ThemeProvider>
                <></>
            </ThemeProvider>,
        )
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
