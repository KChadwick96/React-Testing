import { SAVE_COMMENT } from 'actions/types';

const reducer = (state = [], action) => {
    switch (action.type) {
        case SAVE_COMMENT:
            return [...state, action.comment];

        default:
            return state;
    }
};

export default reducer;