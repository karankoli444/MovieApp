
function Card({Poster,Title,Type,Year}){

    return(
      <div className="card">
        <img src={Poster} alt="movieposter" width='380px' height='250px'/>
        <h2 className="Title">{Title}</h2>
        <p className="Type">{Type}</p>
        <h3 className="Year">Year:{Year}</h3>
        </div>
    )
}
export default Card;