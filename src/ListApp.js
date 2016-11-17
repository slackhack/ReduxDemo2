import React from 'react';
import SimpleField from './SimpleField';
import ItemList from './ItemList';

export default class ListApp extends React.Component {

    constructor()
    {
        super();
    }

    render()
    {
        return (<div className="form">
                    <SimpleField/>
                    <ItemList/>
            </div>);
    }
}