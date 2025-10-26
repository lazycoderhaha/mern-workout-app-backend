import express from 'express';
import { getWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout } from '../controllers/workoutController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

// require auth for all workout routes
router.use(authMiddleware);

// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)


// POST a new workout
router.post('/', createWorkout)


// DELETE a workout
router.delete('/:id', deleteWorkout)


// PATCH a workout
router.patch('/:id', updateWorkout)


export default router;