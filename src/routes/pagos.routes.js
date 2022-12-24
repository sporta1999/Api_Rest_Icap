import { Router } from "express";
import {
  createPago,
  deletePago,
  getPago,
  getPagos,
  updatePago,
} from "../controllers/pagos.controller.js";

const router = Router();

router.get("/pagos", getPagos);
router.post("/pagos", createPago);
router.put("/pagos/:Nr", updatePago);
router.delete("/pagos/:Nr", deletePago);
router.get("/pagos/:Nr", getPago);

export default router;
