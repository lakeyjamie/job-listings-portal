import React from 'react'; 
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

export default Pagination;