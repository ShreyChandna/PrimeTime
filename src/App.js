
import './App.css';


import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route path="" element={<News key="general" pageSize={8} category="general" />}></Route>
          <Route path="/home" element={<News key="general" pageSize={8} category="general" />}></Route>
          <Route path="/general" element={<News key="general" pageSize={8} category="general" />}></Route>
          <Route path="/sports" element={<News key="sports" pageSize={8} category="sports" />}> </Route>
          <Route path="/business" element={<News key="business" pageSize={8} category="business" />}> </Route>
          <Route path="/science" element={<News key="science" pageSize={8} category="science" />}> </Route>
          <Route path="/entertainment" element={<News key="entertainment" pageSize={8} category="entertainment" />}></Route>
          <Route path="/health" element={<News key="health" pageSize={8} category="health" />}></Route>
          
        </Routes>
        </Router>
      </div>
    )
  }
}
