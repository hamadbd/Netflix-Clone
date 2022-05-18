import Movie from "../Movie/Movie";

import "./MovieList.css";
export default function MovieList({data}){
    return(
        <div id="content">
        {
            data.map((data)=>{
                return(
                    <div key={data.id}><Movie data={data}/></div>
                )
            })
        }
        </div>
        
    )
}