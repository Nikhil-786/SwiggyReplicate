import  { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addMovieList } from '../utils/MovieSlice';

const useMovieHooks = () => {

const dispatch = useDispatch();
    useEffect(()=>{

        getApiresults();

    },[]);

    const getApiresults = async()=>{
     const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.4616788&lng=72.80280239999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'); 
        const json = await data.json();

       dispatch(addMovieList(json));
    }

}

export default useMovieHooks
