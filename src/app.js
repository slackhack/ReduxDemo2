import React from 'react';
import ReactDOM from 'react-dom';
import ListApp from './ListApp';
import listStore from './ListStore';
import {Provider} from 'react-redux';

ReactDOM.render( <Provider store={listStore}>
                    <ListApp/>
                </Provider>,
                document.getElementById('reduxdemo'));


