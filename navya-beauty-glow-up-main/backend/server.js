import app from './app.js';
import { connectDB } from './config/db.js';
import { errorHandler } from './middleware/errorHandler.js';

// ... (after routes)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Start server after DB connection
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
  });
});