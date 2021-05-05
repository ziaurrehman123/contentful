import React, { useEffect, useState } from "react";
import './App.css';
import { client } from "./client";

const App=()=> {
  const [meeting, setMeeting]=useState();
  useEffect(()=>{
    client.getEntries()
    .then((response)=>{
      console.log(response);
      setMeeting({meeting:response.items})
    })
    .catch(console.error)
  },[])
  
  return (
    <div className="App">
  <h1>Schedule Meet</h1>
    </div>
  );
}

export default App;
