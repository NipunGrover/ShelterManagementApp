import React from 'react'
import { useState, useRef, useEffect } from 'react'

export const Login = () => {
  const userRef = useRef();
  const errorRef = useRef();
  
  const [user, setUser] = useState('');   
  const [password, setPasswword] = useState('');
  const [errorMsg, setErrorMsg] = useState(false);  
  const [successMsg, setSuccessMsg] = useState(false);  

  useEffect(() => {
    userRef.current.focus();
  } ,[]);


  //this is to make the error disappear when  the user types again as they are adjusting the input
  useEffect(() => { 
    setErrorMsg('');
  }, [user, password]);

//this is to prevent the form from submitting
  const handleSubmit = async (e) => {
    e.preventDefault();
  
  }

  return (

    <section>
      <p ref={errorRef} className={errorMsg ? "errorMsg" : "offscreen"} 
      aria-live="assertive"> {errorMsg} </p>
      <h1>Sign In</h1>
      <form>
        <label htmlFor="username">Username</label>
          <input 
            type="text"
            id = "username"
            ref = {userRef}
            autoComplete="off"
            //to track if the username typed is valid
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />

        <label htmlFor="password">Password</label>
          <input 
            type="password"
            id = "password"
            autoComplete="off"
            //to track if the username typed is valid
            onChange={(e) => setUser(e.target.value)}
            value={password}
            required
          />
          <button>Sign In</button>
      </form>
      <p>
        Need an Account? <br/>
        <span className="line">
          {""}
          <a href="#">Sign Up</a>
        </span>
      </p>
    </section>
  )
}
