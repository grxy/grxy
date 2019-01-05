import React from 'react'
import Head from 'next/head'

const themes = {
    dark: ['rgba(20,0,69,1)'],
    light: ['rgba(52, 152, 219, 1)'],
    orange: ['rgba(180, 90, 0, 1)'],
    purple: ['rgba(69,0,69,1)'],
}

const getThemeKey = () => {
    const hour = new Date().getHours()

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

const theme = themes[getThemeKey()]

const [color] = theme

const bgColor = theme[1] || 'rgb(10, 7, 15)'

export default () => (
    <>
        <Head>
            <title>Grex | engineer // mountaineer // adventurer</title>
            <link
                href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900"
                rel="stylesheet"
            />
            <style type="text/css">
                {`
                    * {
                        border: none;
                        margin: 0;
                        padding: 0;
                    }
                    html {
                        height: 100%;
                    }
                    body {
                        background: ${bgColor};
                        color: #fff;
                        font-family: Lato, Helvetica, sans-serif;
                    }

                    header {
                        background: ${bgColor};
                        background: linear-gradient(0deg, ${bgColor} 0%, ${color} 100%);
                        padding: 180px 0;
                    }

                    h1 {
                        font-size: 4em;
                        font-size: 16vw;
                        font-weight: 900;
                        text-align: center;
                    }

                    h2 {
                        font-size: 1em;
                        font-size: 4vw;
                        font-weight: 100;
                        text-align: center;
                    }

                    ul {
                        text-align: center;
                    }

                    li {
                        display: inline;
                        font-weight: 100;
                        margin: 24px;
                    }

                    a {
                        color: #fff;
                        border-bottom: 1px solid #fff;
                        text-decoration: none;
                    }

                    @media screen and (min-width: 600px) {
                        h1 {
                            font-size: 6em;
                        }

                        h2 {
                            font-size: 1.5em;
                        }
                    }
                `}
            </style>
        </Head>
        <header>
            <h1>I am Grex</h1>
            <h2>engineer // mountaineer // adventurer</h2>
        </header>
        <ul>
            <li>
                <a href="https://github.com/grxy">Github</a>
            </li>
            <li>
                <a href="https://linkedin.com/in/andrewgrexa">LinkedIn</a>
            </li>
        </ul>
    </>
)
