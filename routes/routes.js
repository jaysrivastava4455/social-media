import express from 'express';
import userRoutes from "./user.route.js";
import authRoutes from "./auth.route.js";
import postRoutes from "./post.route.js";


const router = express.Router();
const baseURL = "/api/v1"; // Adjusted baseURL

router.use(`${baseURL}/user`, userRoutes);
router.use(`${baseURL}/auth`, authRoutes);
router.use(`${baseURL}/posts`, postRoutes);


export { router as routers };
 