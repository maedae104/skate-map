import './App.css';
import React from 'react';
import SearchButton from './components/Search';
import { useState, useEffect, setState } from 'react';
import skategroups from './Data.js'
import SampleMap from './components/Map.js'

const groups = skategroups
function App() {
return (
    <><><><h1>Queer Skate Map</h1>  <h2>Skate Group Directory</h2>
    <div class="flex-container"><h3>Group Name:{groups.map(groups => <div>{groups.groupName} </div>)}</h3>
      <h3> City: {groups.map(groups => <div>{groups.city}</div>)}</h3></div></><SearchButton /></><SampleMap /></>
    
    
  );} 
  


export default App;
