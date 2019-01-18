import styled from '@emotion/styled'
import React from 'react'
import Head from 'next/head'

const Header = styled.header`
    background: ${(props) => props.theme.colors.background};
    background: linear-gradient(
        0deg,
        ${(props) => props.theme.colors.background} 0%,
        ${(props) => props.theme.colors.primary} 100%
    );
    padding: 180px 0;
    transition: background 1s;
`

const H1 = styled.h1`
    font-size: 4em;
    font-size: 16vw;
    font-weight: 900;
    text-align: center;

    @media screen and (min-width: 600px) {
        font-size: 6em;
    }
`

const H2 = styled.h2`
    font-size: 1em;
    font-size: 4vw;
    font-weight: 100;
    text-align: center;

    @media screen and (min-width: 600px) {
        font-size: 1.5em;
    }
`

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
                `}
            </style>
        </Head>
        <Header>
            <H1>I am Grex</H1>
            <H2>engineer // mountaineer // adventurer</H2>
        </Header>
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
