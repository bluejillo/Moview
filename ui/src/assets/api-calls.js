import axios from 'axios';

const getPopular = () => {
    return axios.get('http://localhost:4000/');
}

const getGenres = () => {
    return axios.get('http://localhost:4000/genre');
}

export {
    getPopular,
    getGenres
}