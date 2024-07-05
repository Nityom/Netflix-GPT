
import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch} from 'react-redux';
import { addTeaserVideo } from '../utils/movieSlice';

const useMovieTeaser = (movieId) =>{

    const dispatch = useDispatch();
    const getMovieVideos = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);

        const json = await data.json();
     
        const teaser = json.results.filter(video => video.type ==='Teaser');
      
     dispatch(addTeaserVideo(teaser));
    };

    useEffect(()=>{
        getMovieVideos();
    },[])


}

export default useMovieTeaser;