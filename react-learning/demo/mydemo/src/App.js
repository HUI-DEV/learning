import React, { useState, useEffect } from "react";
import './App.css'

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList([1, 2, 3, 4, 8])
  }, [])

  return (
    <div className="App">
      <div className="header"></div>
   
        <ul className="content">
          {
            list.map(item => {
              return (
                <li key={item} className="item"></li>
              )
            })
          }
        </ul>
      
      <div className="footer">
        
      </div>
    </div>

  );
}

export default App;
