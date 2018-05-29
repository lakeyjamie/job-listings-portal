import React from 'react'; 
import PropTypes from 'prop-types';
import '../css/SearchBar.css';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		//Not preventing page from refreshing
		e.preventDefault;
		console.log(e);
	}

	handleKeyPress(e){
		if (e.which === 13 /* Enter */) {
			e.preventDefault();
		}
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input 
					type="text" 
					value={this.props.searchText}
					placeholder="Search for a job, company, or location..."
					onChange={this.props.handleSearch}
					onKeyPress={this.handleKeyPress}
				/>
			</form>
		)
	}
}

SearchBar.propTypes = {
	handleSearch: PropTypes.func.isRequired,
	searchText: PropTypes.string.isRequired
}

export default SearchBar;
