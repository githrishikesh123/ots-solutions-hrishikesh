import express from "express";
import { getAllProjects,getProject,createProject } from "../controllers/projectControllers.js";

const router = express.Router();
router.route('/').get(getAllProjects)

router.route('/:id').get(getProject)

router.route('/:name').post(createProject)


export default router;
