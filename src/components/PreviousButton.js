import React from 'react'; 
import PropTypes from 'prop-types';

class PreviousButton extends React.Component {
    render() {
        const button = this.props.previous ? 
            <button onClick={() => this.props.handleNextButtonClick(this.props.previous)}>⇺</button> 
            : null;
		return (
			<React.Fragment>
                {button}
            </React.Fragment>
		)
	}
}

PreviousButton.propTypes = {
	handleNextButtonClick: PropTypes.func.isRequired,
	previous: PropTypes.string
}

export default PreviousButton;
