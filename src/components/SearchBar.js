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

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input 
					type="text" 
					value={this.props.searchText}
					placeholder="Search..."
					onChange={this.props.handleSearch}
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
