import React from 'react';
import { Container, Row, Col } from '../../assets/bootstrapImports';
import './Movie.scss';

const Movie = (props) => {

	const titlePrep = (title) => {
		let shortTitle = null;
		if(title.split('').length > 32){
		  shortTitle = title.slice(0,29).split('').join('')+'...';
		  return shortTitle;
		} else {
			return title;
		}

	}
	return (
		<Container className="movie" id={props.id} onClick={props.click}>
			<Row>
				<Col>
					<img src={`https://image.tmdb.org/t/p/w200/${props.poster}`} className='movie__poster'
					alt={`${props.title} poster image`}/>
				</Col>
			</Row>
			<Row>
				<Col>
					<h3 className='movie__title'>{titlePrep(props.title)}</h3>
					<p className='movie__rating'>Rating: {props.rating}</p>
				</Col>
			</Row>
		</Container>
	);
}

export default Movie;