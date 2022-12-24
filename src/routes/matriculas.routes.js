import { Router } from "express";
import {
  getMatriculas,
  createMatricula,
  updateMatricula,
  deleteMatricula,
  getMatricula,
} from "../controllers/matriculas.controller.js";

const router = Router();

router.get("/matriculas", getMatriculas);
router.post("/matriculas", createMatricula);
router.put("/matriculas/:Nr", updateMatricula);
router.delete("/matriculas/:Nr", deleteMatricula);
router.get("/matriculas/:Nr", getMatricula);

export default router;
