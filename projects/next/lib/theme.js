import merge from 'deepmerge'

const defaultTheme = {
    colors: {
        background: 'rgb(10, 7, 15)',
    },
}

const themes = {
    dark: {
        colors: {
            primary: 'rgba(20,0,69,1)',
        },
    },
    light: {
        colors: {
            primary: 'rgba(52, 152, 219, 1)',
        },
    },
    orange: {
        colors: {
            primary: 'rgba(180, 90, 0, 1)',
        },
    },
    purple: {
        colors: {
            primary: 'rgba(69,0,69,1)',
        },
    },
}

const getThemeKey = (date) => {
    // const timezoneOffset = -7
    // const hour = (date.getUTCHours() + timezoneOffset + 24) % 24

    const hour = date.getHours()

    if (hour < 6) {
        return 'dark'
    } else if (hour < 9) {
        return 'orange'
    } else if (hour < 18) {
        return 'light'
    } else if (hour < 20) {
        return 'orange'
    }

    return 'purple'
}

const getTheme = (date = new Date()) => {
    const theme = themes[getThemeKey(date)]

    return merge(defaultTheme, theme)
}

export { getTheme }
export default themes
