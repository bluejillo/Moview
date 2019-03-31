import React, { Component } from 'react';
import { Container, Row, Col } from '../../assets/bootstrapImports';
import Movie from '../Movie/Movie';
import SearchForm from '../SearchForm/SearchForm';
import axios from 'axios';

import './MovieList.scss';


class MovieList extends Component {
	state = {
		movies: [],
		singleMovieToggle: false
	}

	componentDidMount() {
		axios.get('http://localhost:4000/')
			.then(res => {
				const movies = res.data.results;
				this.setState({movies: movies});
				console.log(movies);
			});
	}

	singleMovieToggleHandler = () => {
		const toggleFlag = this.state.singleMovieToggle;
		this.setState({singleMovieToggle: !toggleFlag});
	}

	render() {
		let movieslist = null;
		let closeSingle = null;

		if(this.state.singleMovieToggle === false) {
			movieslist = this.state.movies.map(movie => {
				return <Movie key={movie.id} 
						id={movie.id}
						rating={movie.vote_average}
						title={movie.title}
						poster={movie.poster_path}
						click={() => this.singleMovieToggleHandler()}/>
			});
		} else {
			closeSingle = (<p onClick={() => this.singleMovieToggleHandler()}>x</p>);
		}

		
		return (
			<Container className='movie-list'>
				<Row>
					<Col className='movie-list__movies-col'>
						{closeSingle}
						<div>{movieslist}</div>
					</Col>
					<Col xs={2} className='movie-list__search-form-container'><SearchForm/></Col>
				</Row>
			</Container>
		);
	}
}

export default MovieList;