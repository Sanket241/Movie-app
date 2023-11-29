import React from 'react'
import { useGlobalContext } from './Context';

const Search = () => {
  const { query, setQuery, error } = useGlobalContext();
  return (
    <>
      <section className='search-section'>
        <h2>Search Your Movie</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input type="text" placeholder='Search Here'value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>
        </form>
        <div className="card-error">
          <p>{error.show && error.msg}</p>
        </div>
      </section>



    </>


  )
}

export default Search