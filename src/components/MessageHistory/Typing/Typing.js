import React from 'react';
import PropTypes from 'prop-types';

function Typing(props) {
    const { from, message } = props;

    return (
        <li>
            <div class="message-data">
                <span class="message-data-name"><i class="fa fa-circle online"></i>{from.name}</span>
                <span class="message-data-time">{message.time}</span>
                </div>
            <div class="typing">
                <div className="typing-point"></div>
            </div>
        </li>
    )
}

Typing.propTypes = {
    from: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
};

export default Typing;

