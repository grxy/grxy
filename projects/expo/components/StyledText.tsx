import React from 'react'

import { Text, TextProps } from './Themed'
import useColorScheme from '../hooks/useColorScheme'

export function MonoText(props: TextProps) {
    const { style, ...otherProps } = props

    const theme = useColorScheme()
    const themeStyles = props[theme] || {}

    return (
        <Text
            {...otherProps}
            style={[props.style, themeStyles, { fontFamily: 'space-mono' }]}
        />
    )
}
