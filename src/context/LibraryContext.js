import createDataContext from './createDataContext'
import data from './LibraryList.json'

const libraryReducer = (state, action) => {
    switch(action.type) {
        case 'list_libraries':
            return {...state, libraryList: action.payload}
        case 'select_library':
            return {...state, selectedLibrary: action.payload }
        case 'default':
            return state
    }
}

const loadData = (dispatch) => () => {
    dispatch({ type: 'list_libraries', payload: data})
}

const selectLibrary = (dispatch) => (id) => {
    dispatch({ type: 'select_library', payload: id})
}

export const { Provider, Context } = createDataContext(
    libraryReducer,
    { loadData, selectLibrary },
    { libraryList: [], selectedLibrary: null } 
)