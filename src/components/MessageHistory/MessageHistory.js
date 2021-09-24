import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message/Message';
import Response from './Response/Response';
import Typing from './Typing/Typing';

function MessageHistory(props) {
    const { list } = props;

    if (list.lenght === 0 || !list) {
        return;
    }

    return (
        <ul>
            {
                list.map( item => 
                    (item.type === 'message') ? <Message key={item.id} from={item.from} message={item}/> :
                    (item.type === 'response') ? <Response key={item.id} from={item.from} message={item}/> :
                    <Typing key={item.id} from={item.from} message={item}/>
                )
            }
        </ul>
    )
}

MessageHistory.defaultProps = {
    list: [],
}

MessageHistory.propTypes = {
    list: PropTypes.array.isRequired,
};

export default MessageHistory;

