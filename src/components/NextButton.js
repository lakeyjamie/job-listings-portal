import React from 'react'; 
import PropTypes from 'prop-types';

class NextButton extends React.Component {
    render() {
        const button = this.props.next ? 
            <button onClick={() => this.props.handleNextButtonClick(this.props.next)}>⇻</button> 
            : null;
		return (
			<React.Fragment>
                {button}
            </React.Fragment>
		)
	}
}

NextButton.propTypes = {
	handleNextButtonClick: PropTypes.func.isRequired,
	next: PropTypes.string
}

export default NextButton;
