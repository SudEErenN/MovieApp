
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import MyList from './Pages/MyList/MyList'
import { Routes , Route } from 'react-router-dom'
import {HOME , MY_LİST , MOVIE_DETAIL} from './constants/path'
import MovieDetail from './Pages/MovieDetail/MovieDetail'

function App() {
  

  return (
    <>
     <div className='App'>
      <Navbar/>
      <Routes>
        <Route path={HOME} element={<Home/>}/>
        <Route path={MY_LİST} element={<MyList/>}/>
        <Route path={MOVIE_DETAIL} element={<MovieDetail />} />
      </Routes>

     </div>
    </>
  )
}

export default App
