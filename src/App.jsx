import React from 'react'
import Header from './Components/Header'
import Content from './Components/Content'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Desc from './Pages/Desc';

const App = () => {
  return (
    <>
      <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Content />} />
        <Route exact path="/Desc/:id" element={<Desc />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
