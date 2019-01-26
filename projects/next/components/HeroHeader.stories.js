import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import HeroHeader from './HeroHeader'

const stories = storiesOf('HeroHeader', module)

stories.add('default', () => (
    <HeroHeader
        subtitle={text('Subtitle', 'This is a subtitle')}
        title={text('Title', 'This is a title')}
    />
))

stories.add('with only a title', () => (
    <HeroHeader title={text('Title', 'This is a title')} />
))
