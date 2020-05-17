import React from 'react'
import { Alert } from 'react-bootstrap'

const Message = (props) => (
	<Alert bsStyle="warning">
    <p>{props.message}</p>
  </Alert>
)

// Message.propTypes =  {
// 	message: PropTypes.string.isRequired
// }

export default Message
