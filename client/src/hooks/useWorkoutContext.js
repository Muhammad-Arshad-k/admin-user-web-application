import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react"

export const useWorkoutsContext =()=>{
    const context =useContext(WorkoutsContext)
    if(!context){
        throw Error('useWorkoutContext mmust be used inside an workoutContextProvider')
    }
    return context

}
