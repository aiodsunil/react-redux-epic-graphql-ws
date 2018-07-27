import {LOAD_STORIES,CLEAR_STORIES} from '../action/index'

const stories = [{
        "by": "A",
        "id": 1,
        "title": "A Title",
        "url": "A URL"
    },
    {
        "by": "B",
        "id": 2,
        "title": "B Title",
        "url": "B URL"
    },
    {
        "by": "C",
        "id": 3,
        "title": "C Title",
        "url": "C URL"
    }
]

const initialState = {
    items: []
}

export function storiesReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_STORIES:
            return {
                items: stories.slice(),
            };
        case CLEAR_STORIES:
            return {
                items: [],
            };
    }
    return state;
}

export default storiesReducer;