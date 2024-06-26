import express from "express";
import newsController from "../controllers/newsController.js";

const router = express.Router();

router.get("/", newsController.news);

export default router;
