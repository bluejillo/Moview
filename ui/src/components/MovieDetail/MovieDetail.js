import React from 'react';
import { Row, Col, Container} from '../../assets/bootstrapImports';
import './MovieDetail.scss';


const MovieDetail = (props) => {
	let castMembers = props.cast.map(member => 
		<Col xs={4}>
			<p className='movie-details__cast-member' key={member.id}>{member.name}</p>
		</Col>
		)
	return (
		<Container className='movie-details'>
			<Row>
				<Col>
					<i className='material-icons movie-details__close'  onClick={props.close} >close</i>
				</Col>
			</Row>
			<Row>
				<Col md={5} lg={5} sm={12} xs={12}>
					<img src={`https://image.tmdb.org/t/p/w500/${props.poster}`} className='movie-details__poster'
						alt={`${props.title} poster image`}/>
				</Col>
				<Col md={7} lg={7} sm={12} xs={12} className='movie-details__info'>
					<h1>{props.title}</h1>
					<p>Rating: {props.rating}</p>
					<p>Release Date: {props.releaseDate}</p>
					<p>{props.description}</p>
					<p>Cast:</p>
					<Row className='movie-details__cast-list'>
						{castMembers}
					</Row>
					
				</Col>
			</Row>
		</Container>
	);
}

export default MovieDetail;