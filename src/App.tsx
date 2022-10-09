import './App.css';
import React,{useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from "react-redux"
import {update} from "./redux/userSlice"

function App() {
  const user = useSelector((state:any)=>state.user);
  const dispatch = useDispatch(); 

  const handle_dispatchFunction=()=>{
    dispatch(update({
      name: "Nguyen Van Hung",
      age: "2000",
      about: " software engineer1",
      avatar: "avatar url- 1234",
    }));
  }
  useEffect(() => {
    handle_dispatchFunction();  
    return () => {      
    }
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
       Thong tin user: <br></br>
       {user.name} <br></br>
       {user.age} <br></br>
       {user.about} <br></br>
       {user.avatar} <br></br>
      </header> 
    </div>
  );
}

export default App;
