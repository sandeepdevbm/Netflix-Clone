import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import{originals,action,ComedyMovies,HorrorMovies,RomanceMovies} from './urls'
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSamll />
      <RowPost url={ComedyMovies} title='Comedy' isSamll />
      <RowPost url={HorrorMovies} title='Horror' isSamll />
      <RowPost url={RomanceMovies} title='Romance' isSamll />
      {/* <RowPost url={Documentaries} title='Documentaries' isSamll /> */}
    </div>
  );
}

export default App;
