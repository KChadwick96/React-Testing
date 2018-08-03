import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        comment: 'Hello'
    };

    const newState = commentsReducer([], action);
    expect(newState).toEqual(['Hello']);
});

it('handles action with unknow type', () => {
    const newState = commentsReducer([], {});
    expect(newState).toEqual([]);
});