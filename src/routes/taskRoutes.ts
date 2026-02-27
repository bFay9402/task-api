import express from 'express';
import { body } from 'express-validator';
import { createTask, getTasks, updateTask, deleteTask } from '../controllers/taskController';
import { protect } from '../middleware/authMiddleware';
import { validate } from '../middleware/validate'; 

const router = express.Router();

router.post(
  "/", 
  protect,
  [
    body("title").notEmpty().withMessage("Title is required"),
  ],
  validate, 
  createTask
);
router.get("/", protect, getTasks);
router.put("/:id", protect, updateTask);
router.delete("/:id", protect, deleteTask);

export default router;