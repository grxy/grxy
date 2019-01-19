import styled from '@emotion/styled'
import { string } from 'prop-types'
import React from 'react'

const Header = styled.header`
    background: ${(props) => props.theme.colors.background};
    background: linear-gradient(
        0deg,
        ${(props) => props.theme.colors.background} 0%,
        rgba(0, 0, 0, 0)
    );
    padding: 180px 0;
    position: relative;

    &:before {
        background: ${(props) => props.theme.colors.primary};
        content: '';
        position: absolute;
        transition: background 0.3s;
        z-index: -1;

        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
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
