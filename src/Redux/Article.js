// actions
const addArticle = 'ADD_ARTICLE'
const removeArticle = 'REMOVE_ARTICLE'

// reducer
const articleReducer = (state = [], action) => {
    switch (action.type) {
        case addArticle: {

            return [...state, action.payload]
        }
        case removeArticle: {

            return state.filter(p => (p.id !== action.payload.id))
        }
        default: {
            return state
        }
    }
}

// actionCreator
const addArticleAction = (props) => {
    return {
        type: addArticle,
        payload: {
            title: props.title,
            txt: props.txt
        }
    }
}

const removeArticleAction = (id) => {
    return {
        type: removeArticle,
        payload: { id }
    }
}

export default articleReducer;
export {
    addArticleAction,
    removeArticleAction
}