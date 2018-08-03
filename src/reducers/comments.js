import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

const reducer = (state = [], action) => {
    switch (action.type) {
        case SAVE_COMMENT:
            return [...state, action.comment];

        case FETCH_COMMENTS:
            const comments = action.response.data.map(comment => comment.name);
            return [...state, ...comments];

        default:
            return state;
    }
};

export default reducer;