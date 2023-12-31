import axios from '../../axios'
import React,{useEffect,useState} from 'react'
import {imageUrl,API_KEY} from '../../constants/constants'
import Youtube from 'react-youtube'
import './RowPost.css'

function RowPost(props) { 
  const [movies,setMovies]=useState([])
  const [urlId,setUrlId]=useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data);
      setMovies(response.data.results)
    }).catch(err=>{
      // alert('Network Issue')
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
    },
  };
  const hanldeMovie = (id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data);
      if(response.data.results.length!=0){
        setUrlId(response.data.results[0])
      }else{
        console.log('array empty');
      }
    })

  }
  return (
    
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>

        
        <img onClick={()=>hanldeMovie(obj.id)} className={props.isSamll ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt='poste' />
      )}
      </div>
     {urlId && <Youtube opts={opts} videoId={urlId.key} /> }
    </div>
  )
}

export default RowPost
