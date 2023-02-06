const express =require('express');
const router = express.Router();
const {createWorkout, getAllWorkouts, getWorkout, deleteWorkout, updateWorkout}  = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

//require auth for all workout routes
router.use(requireAuth)

//GEt all workouts
router.get('/',getAllWorkouts)

//GEt a single workout
router.get('/:id',getWorkout)

//POST a new workout
router.post('/',createWorkout)



//DELETE a workout
router.delete('/:id',deleteWorkout)
// UPDATE a workout
router.patch('/:id',updateWorkout)



module.exports = router;









