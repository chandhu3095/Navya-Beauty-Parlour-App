import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import routes from './routes/userRoutes.js';

const app = express();

// Middleware
app.use(cors()); // Allow frontend requests
app.use(morgan('dev')); // Log requests
app.use(express.json()); // Parse JSON data

// Routes
app.use('/api', routes); // All routes start with /api

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

export default app;