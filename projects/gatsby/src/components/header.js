import React from 'react'
import { string } from 'prop-types'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
    <div
        style={{
            background: 'rebeccapurple',
            marginBottom: '1.45rem',
        }}
    >
        <div
            style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '1.45rem 1.0875rem',
            }}
        >
            <h1 style={{ margin: 0 }}>
                <Link
                    style={{
                        color: 'white',
                        textDecoration: 'none',
                    }}
                    to="/"
                >
                    {siteTitle}
                </Link>
            </h1>
        </div>
    </div>
)

Header.propTypes = {
    siteTitle: string.isRequired,
}

export default Header
