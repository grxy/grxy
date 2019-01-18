import styled from '@emotion/styled'
import { string } from 'prop-types'
import React from 'react'

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

const HeroHeader = ({ subtitle, title }) => (
    <Header>
        <H1>{title}</H1>
        {subtitle && <H2>{subtitle}</H2>}
    </Header>
)

HeroHeader.defaultProps = {
    subtitle: '',
}

HeroHeader.propTypes = {
    subtitle: string,
    title: string.isRequired,
}

export default HeroHeader
