import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [words, setWords] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/words?language=ENGLISH&size=5");
      
      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = await response.json(); 
      console.log(data);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
      console.log(error);
    }
  };

  return (
    <div className="">
      Hello
      <div>{words ? "words!" : <span>No Words</span>}</div>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}

export default App;
