
import React, { useState } from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutContext'; 


const WorkoutForm=()=> {
const {dispatch}= useWorkoutsContext()
const [title,setTitle]=useState('');
const [reps,setReps]  = useState('');
const [load,setLoad]  = useState('');
const [error,setError]  = useState(null);
const [emptyFields,setemptyFields]=useState([]);

 const handleSubmit = async(e)=>{
     e.preventDefault();

     const workout = {title,load,reps}
     const response = await fetch('/api/workouts',{
      method:'POST',
      body:JSON.stringify(workout),
      headers:{
        'Content-Type': 'application/json'
      }
     })
     const json =  await response.json()

   if(!response.ok){
      setError(json.error)
      setemptyFields(json.emptyFields)
     }
     if(response.ok){
      setTitle('')
      setLoad('')
      setReps('')
      setError(null)
      setemptyFields([])
      console.log("new workout added",json)
      dispatch({type:'CREATE_WORKOUT',payload:json})
     }
 } 
  return (
    <div className="form">
      {console.log(emptyFields)}
       <form  className='create' onSubmit={handleSubmit} action="">
       <h3>Add a New Workout</h3>
       <label htmlFor="title">Exercise Title:</label>
       <input className={emptyFields.includes('title')? 'error':''} value={title} onChange={(e)=>setTitle(e.target.value)} name="title" id="title" type="text" />
       <label htmlFor="reps">Reps:</label>
       <input className={emptyFields.includes('reps')? 'error':''}  value={reps} onChange={(e)=>setReps(e.target.value)} name="reps"    id='reps' type="text" />
       <label htmlFor="load">Load(in Kg)</label>
       <input className={emptyFields.includes('load')? 'error':''}  value={load} onChange={(e)=>setLoad(e.target.value)} name="load"   id="load" type="text" />
       <button  >Add Workout</button>
        {error&& <div className="error">{error}</div>}
       </form>
    </div>
  )
}

export default WorkoutForm