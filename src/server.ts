import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import authRoutes from './routes/authRoutes';
import taskRoutes from './routes/taskRoutes';
import { protect } from './middleware/authMiddleware';
import { errorHandler } from './middleware/errorMiddleware';

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.get("/api/test", (req: Request, res: Response) => {
  res.json({ message: "API is working" });
});

app.get("/api/protected", protect, (req, res) => {
  res.json({ message: "You accessed a protected route" });
});

const PORT = process.env.PORT || 3000;
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(errorHandler);