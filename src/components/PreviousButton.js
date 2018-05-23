import React from 'react'; 

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

export default PreviousButton;
