import React, { useContext, useEffect } from 'react'
import { Text } from 'react-native'
import { Context } from '../context/LibraryContext'

const LibraryList = () => {
    const { state, loadData } = useContext(Context)

    useEffect(() => {
        loadData()
        console.log(state)
    }, [])

    return (
        <Text>aaaa</Text>
    )
}

export default LibraryList