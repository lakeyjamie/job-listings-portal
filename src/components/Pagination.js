import React from 'react'; 
import PropTypes from 'prop-types';
import PreviousButton from './PreviousButton';
import NextButton from './NextButton';
import '../css/Pagination.css';

class Pagination extends React.Component {
	render() {
		return (
			<div className="pagination">
                <PreviousButton 
                    previous={this.props.previous}
                    handleNextButtonClick={this.props.handleNextButtonClick}
                />
                <NextButton 
                    next={this.props.next}
                    handleNextButtonClick={this.props.handleNextButtonClick}
                />
            </div>
		)
	}
}

Pagination.propTypes = {
    handleNextButtonClick: PropTypes.func.isRequired,
    next: PropTypes.string,
	previous: PropTypes.string
}

export default Pagination;