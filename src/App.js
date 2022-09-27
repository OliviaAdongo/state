import { response } from 'express';
import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Stand from './components/Stand';

function App() {
const [post, setPost]= useState()

useEffect(()=>{
  fetch('http://localhost:5600/posts')
  .then(response => response.json())
  .then(
    (post) => {
      setPost(post)
    console.log(setPost)
    }
    )

},[])
  return (
    <div className="App">
    <form>

<div className="row mb-4">
  <div className="col">
    <div className="form-outline">
      <input type="text" id="form6Example1" className="form-control" />
      <label className="form-label" for="form6Example1">First name</label>
    </div>
  </div>
  <div className="col">
    <div className="form-outline">
      <input type="text" id="form6Example2" className="form-control" />
      <label className="form-label" for="form6Example2">Last name</label>
    </div>
  </div>
</div>


<div className="form-outline mb-4">
  <input type="text" id="form6Example3" className="form-control" />
  <label className="form-label" for="form6Example3">Event</label>
</div>


<div className="form-outline mb-4">
  <input type="number" id="form6Example4" className="form-control" />
  <label className="form-label" for="form6Example4">Age</label>
</div>


<div className="form-outline mb-4">
  <input type="email" id="form6Example5" className="form-control" />
  <label className="form-label" for="form6Example5">Email</label>
</div>


<div className="form-outline mb-4">
  <input type="tel" id="form6Example6" className="form-control" />
  <label className="form-label" for="form6Example6">Phone</label>
</div>
      <div>
      <input type="radio" value='Female'/>  Female
        <input type="radio" value='Male' /> Male
      </div>

<button type="submit" className="btn btn-primary btn-block mb-4">Add Info</button>
<button type="submit" className="btn btn-primary btn-block mb-4">Delete</button>
</form>
    </div>
  );
}

export default App;
