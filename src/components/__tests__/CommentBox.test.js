import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapper;
beforeEach(() => {
    wrapper = mount(<Root><CommentBox /></Root>);
});

afterEach(() => {
    wrapper.unmount();
});

it('has text area and a button', () => {
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
});

describe('the text area', () => {

    const testComment = 'hello';
    beforeEach(() => {
        wrapper.find('textarea').simulate('change', {
            target: { value: testComment }
        });
        wrapper.update();
    });

    it('has a text area the user can type in', () => {
        expect(wrapper.find('textarea').prop('value')).toEqual(testComment);
    });
    
    it('should empty the text area when the form is submitted', () => {
        wrapper.find('form').simulate('submit');
        wrapper.update();
        expect(wrapper.find('textarea').prop('value')).toEqual('');
    });
});