import { Router } from "express";
import {
  createConcepto,
  deleteConcepto,
  getConcepto,
  getConceptos,
  updateConcepto,
} from "../controllers/conceptos.controller.js";

const router = Router();

router.get("/conceptos", getConceptos);
router.post("/conceptos", createConcepto);
router.put("/conceptos/:Nr", updateConcepto);
router.delete("/conceptos/:Nr", deleteConcepto);
router.get("/conceptos/:Nr", getConcepto);

export default router;
