const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
          <h1>{data.place.name}</h1>
				<a href={`/places/${data.i}/edit`} className="btn btn-warning"> 
  				Edit   
				</a>
				<form method="POST" action={`/places/${data.i}?_method=DELETE`}> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
            <h2>Rating</h2>
            <p>Not Rated</p>
            <h2>Comments</h2>
            <p>No comments yet! </p>

            
            </form>     
          </main>
        </Def>
    )
}

// Ratings


//comments




module.exports = show