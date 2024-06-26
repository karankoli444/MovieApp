
function Card(props){

    return(
      <div className="w-[350px] h-[400px] shadow-2xl flex flex-col duration-300 hover:scale-105 ">
        <div className="w-[340px] h-[300px] px-4 pt-10 mx-auto   duration-300 hover:scale-105 cursor-pointer">
          <img src={props.Poster} alt='poster'className="w-full h-full "/>
        </div>
        <div className="flex flex-col p-4 ">
        <div><h3 className="text-2xl text-[#ffff1a]">{props.Title}</h3></div>
        <div className=" text-slate-200 text-sm font-bold">{props.Type}</div>
        <div className=" text-slate-200 text-sm font-bold">Year  <span>{props.Year}</span></div>
        </div>

        </div>
    )
}
export default Card;