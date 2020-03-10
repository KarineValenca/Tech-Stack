import React from 'react'
import { View, Text } from 'react-native'
import { Header } from './src/components/common'
import { Provider as LibraryProvider } from './src/context/LibraryContext'
import LibraryList from './src/components/LibraryList'

const App = () => {
    return (
      <LibraryProvider>
        <View>
          <Header headerText="Tech Stack"/>
          <LibraryList/>
        </View>
      </LibraryProvider>
    )
}

export default App 