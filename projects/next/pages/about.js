import Link from 'next/link'
import React from 'react'

export default () => (
    <>
        <h1>This is the about page!</h1>
        <Link href="/" prefetch>
            <a href="/">Go Back</a>
        </Link>
    </>
)
