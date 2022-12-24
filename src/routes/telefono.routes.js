import { Router } from "express";
import {
  createTelefono,
  deleteTelefono,
  getTelefono,
  getTelefonos,
  updateTelefono,
} from "../controllers/telefonos.controller.js";

const router = Router();

router.get("/telefonos", getTelefonos);
router.post("/telefonos", createTelefono);
router.put("/telefonos/:Nr", updateTelefono);
router.delete("/telefonos/:Nr", deleteTelefono);
router.get("/telefonos/:Nr", getTelefono);

export default router;
