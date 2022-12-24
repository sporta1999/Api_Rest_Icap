import { Router } from "express";
import {
  createEmail,
  deleteEmail,
  getEmail,
  getEmails,
  updateEmail,
} from "../controllers/emails.controller.js";

const router = Router();

router.get("/emails", getEmails);
router.post("/emails", createEmail);
router.put("/emails/:Nr", updateEmail);
router.delete("/emails/:Nr", deleteEmail);
router.get("/emails/:Nr", getEmail);

export default router;
