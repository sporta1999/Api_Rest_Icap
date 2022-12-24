import { Router } from "express";
import {
  getCentros,
  createCentro,
  updateCentro,
  getCentro,
  deleteCentro,
} from "../controllers/centro_labores_cargos.controller.js";

const router = Router();

router.get("/centro_labores_cargos", getCentros);
router.post("/centro_labores_cargos", createCentro);
router.put("/centro_labores_cargos/:Nr", updateCentro);
router.delete("/centro_labores_cargos/:Nr", deleteCentro);
router.get("/centro_labores_cargos/:Nr", getCentro);

export default router;
