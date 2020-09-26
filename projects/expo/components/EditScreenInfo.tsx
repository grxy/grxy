import * as WebBrowser from 'expo-web-browser'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import tailwind from 'tailwind-rn'

import { MonoText } from './StyledText'
import { Text, View } from './Themed'

export default function EditScreenInfo({ path }: { path: string }) {
    return (
        <View>
            <View style={tailwind('items-center mx-4')}>
                <Text style={tailwind('text-lg leading-4 text-center')}>
                    Open up the code for this screen:
                </Text>

                <View style={tailwind('rounded-sm px-1 my-2 bg-gray-100')}>
                    <MonoText style={tailwind('text-gray-800')}>
                        {path}
                    </MonoText>
                </View>

                <Text style={tailwind('text-lg leading-4 text-center')}>
                    Change any of the text, save the file, and your app will
                    automatically update.
                </Text>
            </View>

            <View style={tailwind('mt-4 mx-6 items-center')}>
                <TouchableOpacity
                    onPress={handleHelpPress}
                    style={tailwind('py-4')}
                >
                    <Text style={tailwind('text-center')}>
                        Tap here if your app doesn't automatically update after
                        making changes
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

function handleHelpPress() {
    WebBrowser.openBrowserAsync(
        'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet',
    )
}
