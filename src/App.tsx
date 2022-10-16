import './App.css';
import React,{useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from "react-redux"
import {update} from "./redux/userSlice"
import { animated, useSpring, useTransition } from '@react-spring/web'
import useOnclickOutside from "react-cool-onclickoutside";

function App() {
  const user = useSelector((state:any)=>state.user);
  const dispatch = useDispatch(); 
  const [show, setShow]= useState(true);
  const springs = useSpring({
    from: {x:0},
    to: {x:100}
  })
  const ref = useOnclickOutside(() => {
    setShow(false);
  })

  const transition = useTransition(show, {
    from: {x: -100, y:300, opacity: 0},
    enter: {x:0, y:0, opacity: 1},
    leave: {x: -100, y:-300, opacity: 0},
  })

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
    <div className='App'>
      <header className='App-header'>
        <button onClick={()=>setShow(!show)}>Change show</button>
        {
          transition((style, item)=> item? <animated.div style={style} className='item'  ref={ref}/>: '')
        }
        
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
