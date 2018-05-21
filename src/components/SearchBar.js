import React from 'react'; 

class SearchBar extends React.Component {
	searchRef = React.createRef();

	handleSearch = event => {
		event.preventDefault;
		var query = this.nameRef.value;
		console.log(query);
	}

	render() {
		return (
			<form onSubmit={this.handleSearch}>
				<input 
				type="text" 
				ref={this.searchRef}
			/>
			</form>
		)
	}
}

export default SearchBar;
