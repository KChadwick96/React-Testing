import axios from 'axios';

import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from 'actions/types';

export const saveComment = comment => {
    return {
        type: SAVE_COMMENT,
        comment
    };
};

export const fetchComments = async () => {
    const response = await axios.get('http://jsonplaceholder.typicode.com/comments');

    return {
        type: FETCH_COMMENTS,
        response
    };
};

export const changeAuth = isLoggedIn => {
    return {
        type: CHANGE_AUTH,
        logged_in: isLoggedIn
    }
}