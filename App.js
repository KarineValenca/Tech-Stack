import React from 'react'
import { View, Text } from 'react-native'
import { Header } from './src/components/common'
import LibraryList from './src/components/LibraryList'

const App = () => {
    return (
      <View>
        <Header headerText="Tech Stack"/>
        <LibraryList/>
      </View>
    )
}

export default App 