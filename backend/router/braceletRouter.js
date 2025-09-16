import express from "express";
import { getBracelets, getBracelet } from "../controller/braceletController.js";

const router = express.Router();

// GET all
router.get("/", getBracelets);

// GET one by id
router.get("/:id", getBracelet);

export default router;
