import styles from './App.module.css';
import Home from './Components/Home';
import Addblog from './Components/Addblog';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <div className={styles.App}>
          <nav>
            <ul>
              <li> <Link to="/"> Home </Link> </li>
              <li> <Link to="/addBlog"> Add Blog </Link> </li>
            </ul>
          </nav>
          
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/addBlog" element={ <Addblog /> }/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
