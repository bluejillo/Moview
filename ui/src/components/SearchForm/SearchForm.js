import React from 'react';
import { Form, Button, Row, Col } from '../../assets/bootstrapImports';
import axios from 'axios';

import './SearchForm.scss';

const SearchForm = (props) => {
	const genres = props.genreList.map(genre => 
			<option value={genre.id} key={genre.id}>{genre.name}</option>
		)
	return (
		<Form className="search-form" id='search-form' onSubmit={props.formHandler} >
			<Row>
				<Col xs='auto'>
					<Button type='submit' className='search-form__submit'>
						<i className="material-icons">search</i>
					</Button>
				</Col>
				<Col xs='auto'>
					<Form.Group>
						<Form.Control type='text' placeholder='Search' 
						id='movie-search' 
						className='search-form__search-box'
						onChange={props.searchChange}
						value={props.query}/>
					</Form.Group>
				</Col>
			</Row>
			{ props.clearFlag && 
				<Row>
					<Col>
						<Button onClick={props.clear}>Cancel</Button>
					</Col>
				</Row>
			}
			<Row>
				<Col>
					<Form.Group>
						<Form.Label>Search by genre:</Form.Label>
						<Form.Control as='select' onChange={props.genreChange}>
						<option>...</option>
							{genres}
						</Form.Control>
					</Form.Group>
				</Col>
			</Row>
		</Form>
	);
}

export default SearchForm;