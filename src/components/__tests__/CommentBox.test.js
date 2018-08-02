import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

let wrapper;
beforeEach(() => {
    wrapper = mount(<CommentBox />);
});

afterEach(() => {
    wrapper.unmount();
});

it('has text area and a button', () => {
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
});

it('has a text area the user can type in', () => {
    const comment = 'hello';
    wrapper.find('textarea').simulate('change', {
        target: { value: comment }
    });
    wrapper.update();

    expect(wrapper.find('textarea').prop('value')).toEqual(comment);
});

it('should empty the text area when the form is submitted', () => {
    const comment = 'hello';
    wrapper.find('textarea').simulate('change', {
        target: { value: comment }
    });
    wrapper.find('form').simulate('submit');
    wrapper.update();

    expect(wrapper.find('textarea').prop('value')).toEqual('');
});