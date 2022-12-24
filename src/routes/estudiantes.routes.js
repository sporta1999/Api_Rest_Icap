import { Router } from "express";
import {
  createEstudiante,
  deleteEstudiante,
  getEstudiante,
  getEstudianteMatriculas,
  getEstudiantes,
  updateEstudiante,
} from "../controllers/estudiantes.controller.js";

const router = Router();

router.get("/estudiantes", getEstudiantes);
router.post("/estudiantes", createEstudiante);
router.put("/estudiantes/:Nr", updateEstudiante);
router.delete("/estudiantes/:Nr", deleteEstudiante);
router.get("/estudiantes/:Nr", getEstudiante);

router.get("/estudiantes/:Nr/matriculas", getEstudianteMatriculas);

export default router;
