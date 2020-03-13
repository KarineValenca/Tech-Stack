import React from 'react'
import { View, Text } from 'react-native'
import { Header } from './src/components/common'
import LibraryList from './src/components/LibraryList'
import { Provider as LibraryProvider } from './src/context/LibraryContext'

const App = () => {
    return (
      <LibraryProvider>
      <View style={{ flex: 1 }}>
        <Header headerText="Tech Stack"/>
        <LibraryList/>
      </View>
      </LibraryProvider>
    )
}

export default App 