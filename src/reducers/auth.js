import { CHANGE_AUTH } from 'actions/types';

const reducer = (state = false, action) => {
    switch (action.type) {
        case CHANGE_AUTH:
            return action.logged_in;

        default:
            return state;
    }
};

export default reducer;