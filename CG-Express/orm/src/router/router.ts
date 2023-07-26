import {Router} from "express";
import classRouter from "./classRouter";
import studentRouter from "./studentRouter";

const router = Router();
router.use('/class', classRouter);
router.use('/student', studentRouter);

export default router;
