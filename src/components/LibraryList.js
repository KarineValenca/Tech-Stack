import React, { useContext, useEffect } from 'react'
import { FlatList, Text, View } from 'react-native'
import ListItem from './ListItem'
import { Context } from '../context/LibraryContext'

const LibraryList = () => {
    const { state, loadData } = useContext(Context)

    useEffect(() => {
        loadData()
        
    }, [])

    const renderLibrary = (library) => {
        return <ListItem library={library}/>
    }

    return (
        <FlatList
            data={state.libraryList}
            keyExtractor={(result) => result.id.toString()}
            renderItem={({ item }) => renderLibrary(item)}
        />

    )
    
}

export default LibraryList