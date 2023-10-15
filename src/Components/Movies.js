import Card from "./Card";
function Movies({ movies, onchangeHandler, search, getmovie }) {
    return (
        <div className="container">

            <div className="logo-container">
                <h1 className="logo">K</h1><span className="logo-name">Movie.com</span>
            </div>
            <h1 className="heading">Search Movie App</h1>
            <div className="navbar">
                <div className="input-section">
                    <input type="text" placeholder="Search Movie" value={search} onChange={onchangeHandler}></input>
                    <button className="search-btn" onClick={getmovie}>Search</button>
                </div>
            </div>
            <div className="cards">

                {
                    movies&&movies.map((movie) => {
                         return <Card key={movie.imdbID} {...movie}></Card>
                    })
                }
            </div>
        </div>)
}


export default Movies;