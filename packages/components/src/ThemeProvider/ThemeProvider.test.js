import { mount } from 'enzyme'
import React from 'react'

import ThemeProvider from './'

jest.mock('@grxy/theme', () => ({
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
        expect(wrapper).toMatchSnapshot()
    })
})
