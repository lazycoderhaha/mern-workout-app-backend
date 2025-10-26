import express from 'express';
import dotenv from 'dotenv';
import workoutRoutes from './routes/workouts.js';
import userRoutes from './routes/users.js';
import mongoose from 'mongoose';
import cors from 'cors';

// dotenv config
dotenv.config();

// express app
const app = express();


// middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})


// root route
app.get("/", (req, res) => {
    res.send(`
    <h1>Welcome to the Workout Tracker API 💪</h1>
    <p>Available routes:</p>
    <ul>
      <li><a href="/api/workouts">/api/workouts</a> - Manage workouts</li>
      <li><a href="/api/user">/api/user</a> - User registration & login</li>
    </ul>
  `);
});


// routes
app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);

// port
const PORT = process.env.PORT;


// connect to db
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        // listen to port
        app.listen(PORT, () => {
            console.log(`Connected to dB and listening to ${PORT}`);
        })
    })
    .catch((error) => {
        console.log(error);
    })


