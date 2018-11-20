import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default () => (
    <>
        <Head>
            <title>next.js playground</title>
        </Head>
        <div>Welcome to next.js!</div>
        <Link href="/about" prefetch>
            <a href="/about">About</a>
        </Link>
    </>
)
