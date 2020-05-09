import withThemeProvider from './withThemeProvider'

jest.mock('../lib/theme', () => ({
    getTheme: () => ({
        test: true,
    }),
}))

describe('<withThemeProvider />', () => {
    const Component = () => 'test'
    const ThemeProvider = withThemeProvider(Component)

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
