import createDataContext from './createDataContext'
import data from './LibraryList.json'

const libraryReducer = (state, action) => {
    switch(action.type) {
        case 'list_libraries':
            return {...state, libraryList: action.payload}
        case 'default':
            return state
    }
}

const loadData = (dispatch) => () => {
    dispatch({ type: 'list_libraries', payload: data})
}

export const { Provider, Context } = createDataContext(
    libraryReducer,
    { loadData },
    { libraryList: [] } 
)