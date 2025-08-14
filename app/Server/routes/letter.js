
import express from 'express';
import { getLetter, downloadLetter } from '../controller/letterController.js';
const router = express.Router()
export default router;

router.post("/get-letter", getLetter)
router.post("/download", downloadLetter)