import React from 'react';
import PropTypes from 'prop-types';

function Response(props) {
    const { from, message } = props;

    return (
        <li class="clearfix">
            <div class="message-data align-right">
                <span class="message-data-time">{message.time}</span> &nbsp; &nbsp;
                <span class="message-data-name">{from.name}</span>
                <i class="fa fa-circle me"></i>
            </div>
            <div class="message other-message float-right">
                {message.text}
            </div>
        </li>
    )
}

Response.propTypes = {
    from: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
};

export default Response;

