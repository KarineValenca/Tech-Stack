import { useEffect, useState } from 'react'
import data from './LibraryList.json'

export default() => {
    const [results, setResults] = useState([])

    const listLibraries = () => {
        setResults(data)
    }

    useEffect(() => {
        listLibraries()
    }, [])

    return [listLibraries, results]
}