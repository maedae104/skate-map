import React from "react";
import { useState, useEffect, setState } from "react";
import skategroups from "../Data";
import SampleMap from "../components/Map.jsx";
import AddButton from "../components/AddButton";

import '../assets/App.css'

const groups = skategroups;
function Main() {
  
  
  return (
    <>
      <>
        <>
          <div
            style={{
              // backgroundColor: "black",
              // color: "white",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <h1>Queer Skate Map</h1> 
            <h2>Skate Group Directory</h2>
            <div
              class="flex-container"
              style={{
                // backgroundColor: "black",
                // color: "white",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <h3 style={{textAlign: 'left'}}>
                Group Name:
                <h4>{groups.map((groups) => (
                  <div style={{textAlign: 'left'}}>{groups.groupName} </div>
                ))}</h4>
              </h3>
              <h3 style={{textAlign: 'left'}}>
                {" "}
                City:{" "}
                <h4>{groups.map((groups) => (
                  <div style={{textAlign: 'left'}}>{groups.city}</div>
                ))}</h4>
              </h3>
            </div>
            <h3>Add a skate group</h3>
            <AddButton></AddButton>
          </div>
        </>
      </>
      <div style={{ paddingLeft: '20em'}}>
        <SampleMap />
      </div>
    </>
  );
}

export default Main;
