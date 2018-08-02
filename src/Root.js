import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from 'reducers';

const Root = ({children}) => (
    <Provider store={createStore(reducers, {})}>
        {children}
    </Provider>
);

export default Root;