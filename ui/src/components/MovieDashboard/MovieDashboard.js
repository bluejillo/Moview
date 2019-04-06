import React, { Component } from 'react';
import { Row, Col } from '../../assets/bootstrapImports';
import Movie from '../Movie/Movie';
import SearchForm from '../SearchForm/SearchForm';
import MovieDetail from '../MovieDetail/MovieDetail';
import Pagination from '../Pagination/Pagination';
import axios from 'axios';

import './MovieDashboard.scss';


class MovieList extends Component {
	state = {
		movies: [],
		singleMovieToggle: false,
		searchQuery: '',
		genres: [],
		singleMovie: {},
		resultsCount: '',
		showClear: false,
		pages: null,
	}

	componentDidMount() {
		axios.get('http://localhost:4000/')
			.then(res => {
				const movies = res.data.results;
				const pages = res.data.total_pages
				this.setState({movies: movies, pages: pages});
			});
		axios.get('http://localhost:4000/genre')
			.then(res => {
				const genres = res.data.genres;
				this.setState({genres: genres});
			});
	}

	paginationClickHandler = (page) => {
		console.log('page clciked');
		axios.get(`http://localhost:4000/?page=${page}`)
			.then(res => {
				const movies = res.data.results;
				this.setState({movies: movies});
			});
	}

	singleMovieDetailHandler = (id) => {
		const toggleFlag = !this.state.singleMovieToggle;
		let movie = null;
		let pages = null;
		if(!id){
			this.setState({singleMovieToggle: toggleFlag});
		} else {
			axios.get(`http://localhost:4000/movie?movieId=${id}`)
				.then(res => {
					movie = res.data;;
					this.setState({singleMovieToggle: toggleFlag, singleMovie: movie});
				});
		}
	}

	formSubmitHandler = (e) => {
		e.preventDefault();

		axios.get(`http://localhost:4000/movies/search?search=${this.state.searchQuery}`)
			.then(res => {
				console.log(res);
				const countData = res.data.total_results;
				const movieData = res.data.results;
				const singleMovieToggle = this.state.singleMovieToggle;
				if(singleMovieToggle){
					this.setState({movies: movieData, resultsCount: countData, singleMovieToggle: !singleMovieToggle});
				} else {
					this.setState({movies: movieData, resultsCount: countData});
				}
				
			});
	}

	formClearHandler = () => {
		axios.get('http://localhost:4000/')
			.then(res => {
				const movies = res.data.results;
				const clearFlag = this.state.showClear;
				this.setState({movies: movies, showClear: !clearFlag, searchQuery: ''});
			});
	}

	searchChangeHandler = (e) => {
		const query = e.target.value;
		const clearFlag = true;
		let { searchQuery } = this.state;
		searchQuery = query;
		this.setState({searchQuery: searchQuery, showClear: clearFlag});

	}

	genreFilterChangeHandler = (e) => {
		if(e.target.value != '...') {
			const clearFlag = this.state.showClear;
			axios.get(`http://localhost:4000/bygenre?genreId=${e.target.value}`)
			.then(res => {
				const movies = res.data.results;
				const singleMovieToggle = this.state.singleMovieToggle;
				if(singleMovieToggle === true) {
					this.setState({movies: movies, showClear: !clearFlag, singleMovieToggle: !singleMovieToggle});
				} else {
					this.setState({movies: movies, showClear: !clearFlag});
				}
			});
		}
		
	}

	render() {
		let movieList = null;
		let singleMovie = null;

		if(this.state.singleMovieToggle === false) {
			movieList = this.state.movies.map((movie, index) => {
				return <Movie key={movie.id} 
						id={movie.id}
						rating={movie.vote_average}
						title={movie.title}
						poster={movie.poster_path}
						click={() => this.singleMovieDetailHandler(movie.id)}/>
			});
		} else {
			singleMovie = (
					<MovieDetail id={this.state.singleMovie.id}
					title={this.state.singleMovie.title}
					close={() => this.singleMovieDetailHandler()}
					poster={this.state.singleMovie.poster_path}
					rating={this.state.singleMovie.vote_average}
					description={this.state.singleMovie.overview}
					releaseDate={this.state.singleMovie.release_date}
					cast={this.state.singleMovie.credits.cast}/>
				);
			
		}
		return (
			<Row className='movie-dashboard'>
				<Col>
					<Row>
						<Col className='movie-dashboard__search-form-container'>
							<SearchForm formHandler={this.formSubmitHandler.bind(this)} 
							searchChange={this.searchChangeHandler.bind(this)} 
							genreList={this.state.genres}
							clear={this.formClearHandler}
							clearFlag={this.state.showClear}
							query={this.state.searchQuery}
							genreChange={this.genreFilterChangeHandler.bind(this)}/>
						</Col>
					</Row>
					<Row>
						<Col className='movie-dashboard__movies-col'>
							{singleMovie}
							{movieList}
							<Pagination totalPages={this.state.pages} pageClick={this.paginationClickHandler}/>
						</Col>
					</Row>
				</Col>
			</Row>
		);
	}
}

export default MovieList;