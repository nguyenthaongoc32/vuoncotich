import express from "express";
import { getBracelets, getBracelet } from "../controller/braceletController.js";

const router = express.Router();

// GET all
router.get("/bracelet", getBracelets);

// GET one by id
router.get("/bracelet/:id", getBracelet);

export default router;
