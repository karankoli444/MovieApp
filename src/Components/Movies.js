import Card from "./Card";
import Spinner from "./Spinner";
 
function Movies({movies,loading}) {


    return (
        <>
        <div className="w-full h-fit flex justify-center items-center flex-wrap mt-2  ">
            {
                loading? <Spinner/> : movies &&movies.map((movie,index)=>{
                    return   <Card {...movie} index={index}/>
                })
            }
        </div>
        </>
    )
}


export default Movies;