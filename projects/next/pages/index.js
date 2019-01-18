import React from 'react'
import Head from 'next/head'

import HeroHeader from '@grxy/next/components/HeroHeader'

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
        <HeroHeader
            subtitle="engineer // mountaineer // adventurer"
            title="I am Grex"
        />
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
