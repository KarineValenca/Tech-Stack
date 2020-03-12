import React from 'react'
import { Text } from 'react-native'
//import { Context } from '../context/LibraryContext'
import useResults from '../hooks/useResults'

const LibraryList = () => {
    const [listLibraries, results] = useResults()
    console.log(results)

    return (
        <Text>aaaa</Text>
    )
}

export default LibraryList