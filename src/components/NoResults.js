import React from 'react'; 
import PropTypes from 'prop-types';

class NoResults extends React.Component {
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

NoResults.propTypes = {
	jobs: PropTypes.object
}

export default NoResults;
