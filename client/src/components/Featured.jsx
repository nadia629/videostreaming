import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { PlayArrow } from '@mui/icons-material';

function Featured({ type, setGenre }) {
  const [movie, setMovie] = useState({
    image: '',
    imageTitle: '',
    description: '',
    limit: '',
  });

  useEffect(() => {
    const getRandomMovie = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = user ? 'Bearer ' + user.accessToken : '';

        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token: token,
          },
        });

        if (res.data && res.data.length > 0) {
          setMovie(res.data[0]);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getRandomMovie();
  }, [type]);

  return (
    <div className='featured'>
      {type && (
        <div className='category'>
          <span className='featuredMovieType'>
            {type === 'movie' ? 'Movies' : 'TV Shows'}
          </span>
          <select
            name='genre'
            id='genre'
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value=''>Genres</option>
            <option value='Action'>Action</option>
            <option value='Anime'>Anime</option>
            {/* Other genre options */}
          </select>
        </div>
      )}
      <img src={movie.image} alt='Featured Header' className='featured-header' />
      <div className='info'>
        {/* <img
          src={movie.imageTitle}
          alt='Featured Title'
          className='featured-title'
        /> */}
        <span className='description'>{movie.description}</span>
        <div className='buttons'>
          <Link
            to='/watch'
            state={{ movie: movie }}
            style={{ textDecoration: 'none' }}
          >
            <button className='play'>
              <PlayArrow className='feat-icon' />
              <span>Play</span>
            </button>
          </Link>
          <span className='age-rating'>{movie.limit}+</span>
        </div>
      </div>
    </div>
  );
}

export default Featured;
