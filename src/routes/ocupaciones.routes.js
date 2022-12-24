import { Router } from "express";
import {
  createOcupacion,
  deleteOcupacion,
  getOcupacion,
  getOcupaciones,
  updateOcupacion,
} from "../controllers/ocupaciones.controller.js";

const router = Router();

router.get("/ocupaciones", getOcupaciones);
router.post("/ocupaciones", createOcupacion);
router.put("/ocupaciones/:Nr", updateOcupacion);
router.delete("/ocupaciones/:Nr", deleteOcupacion);
router.get("/ocupaciones/:Nr", getOcupacion);

export default router;
