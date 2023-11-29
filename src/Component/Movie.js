import React from 'react'
import "./App.css"
import { NavLink } from "react-router-dom";
import { useGlobalContext } from './Context'

const Movie = () => {  
    const { movie,listloading } = useGlobalContext();
    if (listloading) {
        return (
          <section className="movie-section ">
            <div className="loading">Loading....</div>;
          </section>
        );
      } 
    return (
        <section className='moviepage'>
            <div className="grid grid-4-col">

                {movie.map((curmovie) => {
                    const { imbdId, Title, Poster } = curmovie;
                    const moviename = Title.substring(0,15); // this is for Name cut and what i want to show movie title 
                    return (
                    <NavLink to={`movie/${imbdId}`} key={imbdId}>
                        <div className="card">
                            <div className="card-info">
                                <h2>{moviename.length >= 15 ? `${moviename}...`: moviename}</h2>
                                <img src={Poster} alt={imbdId} />
                            </div>
                        </div>
                    </NavLink>
                    )


                })}
            </div>



        </section>

    )






}

export default Movie