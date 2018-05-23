import React from 'react'; 

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

export default NextButton;
