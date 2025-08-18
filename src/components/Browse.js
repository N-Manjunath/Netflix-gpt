// src/components/Browse.js

import { useSelector } from 'react-redux';
import useMovielist from '../Hooks/useMovielist'
import usePopularmovie from '../Hooks/usePopularmovie';
import Header from './Header'
import Maincontainer from './Maincontainer';
import SecondContainer from './SecondContainer';
import Gptsearch from './Gptsearch';

const Browse = () => {
  const gptsearch=useSelector(store=>store.gpt.searchgpt);
  useMovielist();
  usePopularmovie();
  return (
    <div>
      <Header />
      {gptsearch?<Gptsearch/>:(
      <>
      <Maincontainer />
      <SecondContainer />
      </>)}
    </div>
  )
}

export default Browse;