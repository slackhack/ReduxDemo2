import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from './ActionCreators';

class ItemList extends React.Component {

    constructor() {
        super();
    }

    /**
     *
     */
    render() {
        return (<div className="items">
                <ul>
                    {this.props.addedItems}
                </ul>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        addedItems: state.itemList.map((i) => {
            return <li key={i.id}>{i.data}</li>
        })
    }
}


export default connect(mapStateToProps, actionCreators)(ItemList);