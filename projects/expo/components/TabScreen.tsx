import * as React from 'react'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'

import tailwind from 'tailwind-rn'

interface TabScreenProps {
    title: string
    path: string
}

const TabScreen: React.FC<TabScreenProps> = ({ title, path }) => (
    <View style={tailwind('flex-1 items-center justify-center')}>
        <Text style={tailwind('text-4xl font-bold text-pink-600')}>
            {title}
        </Text>
        <View style={tailwind('my-8 h-px bg-gray-300 w-10/12 px-2')} />
        <EditScreenInfo path={path} />
    </View>
)

export default TabScreen
