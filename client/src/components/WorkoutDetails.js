import React from 'react'

import { useWorkoutsContext } from '../hooks/useWorkoutContext'

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

function WorkoutDetails({workout}) {
  const {dispatch}=useWorkoutsContext();

    const handleClick =async()=>{
      console.log("clicked")
   const response = await fetch('/api/workouts/'+workout._id,{
    method:'DELETE'
   })
   const json = await response.json()
   if(response.ok){
      dispatch({type:'DELETE_WORKOUT',payload:json})
   }
  }
  return (
    <div className='workout-details'>
        <h4>{workout.title}</h4>
        <p><strong> Load:{workout.load}</strong></p>
        <p>reps: {workout.reps}</p>
        <p className='material-symbols-outlined'>{formatDistanceToNow(new Date(workout.createdAt),{addsuffix:true})}</p>
        <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails