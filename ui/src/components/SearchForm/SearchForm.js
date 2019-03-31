import React, { Component } from 'react';
import axios from 'axios';

import './SearchForm.scss';

class SearchForm extends Component {
	state = {
		genres: []
	}

	componentDidMount() {
		axios.get('http://localhost:4000/genre')
			.then(res => {
				const genres = res.data.genres;
				this.setState({genres: genres});
			})
	}

	render() {
		let genreList = null;
		genreList = this.state.genres.map(genre => {
			return <p key={genre.id}>{genre.name}</p>
		})
		return (<div className="search-form">
			{genreList}
		</div>);
	}
}

export default SearchForm;