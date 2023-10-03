import "./App.css";
import React from "react";
import SearchButton from "./components/Search";
import { useState, useEffect, setState } from "react";
import skategroups from "./Data.js";
import SampleMap from "./components/Map.jsx";
import './App.css'

const groups = skategroups;
function App() {
  return (
    <>
      <>
        <>
          <div style={{backgroundColor:'black', color: 'white', justifyContent: 'center', textAlign: 'center'}}>
            <h1>Queer Skate Map</h1> <h2>Skate Group Directory</h2>
            <div class="flex-container" style={{backgroundColor:'black', color: 'white', justifyContent: 'center', textAlign: 'center'}}>
              <h3>
                Group Name:
                {groups.map((groups) => (
                  <div>{groups.groupName} </div>
                ))}
              </h3>
              <h3>
                {" "}
                City:{" "}
                {groups.map((groups) => (
                  <div>{groups.city}</div>
                ))}
              </h3>
            </div>
          </div>
        </>
        <SearchButton />
      </>
      <SampleMap />
    </>
  );
}

export default App;
