import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './RowPost.css'
import { API_KEY, baseUrl ,imageUrl} from '../../Constants/constants'


function RowPost(props) {
  const [movies,setMovies] = useState([])
  useEffect(() => {
    axios.get(baseUrl+`/discover/tv?api_key=${API_KEY}&with_networks=213`).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
   
    })
    
  },[]);
  
 
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
            {movies.map((obj)=>{
              return(
                <div className='row'>
                  
                  <img className={props.isSmall ? 'smallPoster': 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" /><br/>
                  <h5>{obj.original_name}</h5>
                  <br/>
                  
                </div>
              )
            })}
             
                    
                  
            
        </div>
    </div>
  )
}

export default RowPost