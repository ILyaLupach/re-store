const initialState = {
    books: []
}

const reducer = (state = initialState, action) => {

    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            }
    }



    return state
}

export default reducer;