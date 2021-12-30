import styles from './App.module.css';
import Home from './Components/Home';
import Addblog from './Components/Addblog';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
const App = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
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
            <Route path="/addBlog" element={ <Addblog body={body} setBody={setBody} title={title} setTitle={setTitle} /> }/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
