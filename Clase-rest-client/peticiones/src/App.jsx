import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import axios from "axios";
import axiosFetch from './api/axiosService';

function App() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const response = await axiosFetch.get('/posts');
        console.log("response", response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  },[]);

  const createPost = async()=>{
    try {
      const response = await axiosFetch.post('/posts', 
        {
          title: 'foo',
          body: 'bar',
          userId: 1,
        },
      );
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <button onClick={createPost}>Crear</button>
      </div>
      <h1>Vite + React</h1>
    </>
  )
}

export default App
