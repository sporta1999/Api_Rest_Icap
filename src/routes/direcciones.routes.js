import { Router } from "express";
import {
  createDireccion,
  deleteDireccion,
  getDireccion,
  getDirecciones,
  updateDireccion,
} from "../controllers/direcciones.controller.js";

const router = Router();

router.get("/direcciones", getDirecciones);
router.post("/direcciones", createDireccion);
router.put("/direcciones/:Nr", updateDireccion);
router.delete("/direcciones/:Nr", deleteDireccion);
router.get("/direcciones/:Nr", getDireccion);

export default router;
