import React from 'react';
import { Form, Button, Row, Col } from '../../assets/bootstrapImports';

import './SearchForm.scss';

const SearchForm = (props) => {
	const genres = props.genreList.map(genre => 
			<option value={genre.id} key={genre.id}>{genre.name}</option>
		)
	return (
		<Form className="search-form" id='search-form' onSubmit={props.formHandler} >
			<Row>
				<Col>
					<Row>
						<Col xs='auto' className='search-form__search-button'>
							<Button type='submit' className='search-form__submit'>
								<i className="material-icons">search</i>
							</Button>
						</Col>
						<Col xs={3} className='search-form__search-bar'>
							<Form.Group>
								<Form.Control type='text' placeholder='Search' 
								id='movie-search' 
								className='search-form__search-box'
								onChange={props.searchChange}
								value={props.query}/>
							</Form.Group>
							
							{ props.clearFlag && 
								<Row>
									<Col>
										<Button onClick={props.clear} className='search-form__cancel-button'>Cancel</Button>
									</Col>
								</Row>
							}
						</Col>
						<Col></Col>
						<Col> 
							<Form.Group as={Row}>
										<Form.Label column xs={6} md={4} className='search-form__genre-label'>Search by genre:</Form.Label>
									<Col xs={6} md={8}>
										<Form.Control as='select' onChange={props.genreChange} className='search-form__genre-list'>
											<option>...</option>
												{genres}
										</Form.Control>
									</Col>
							</Form.Group>
						</Col>
					</Row>
					
				</Col>
			</Row>
		</Form>
	);
}

export default SearchForm;