import {Router} from "express";
import studentController from "../controller/studentController";

const studentRouter = Router();
studentRouter.get('/', studentController.findAll); // req res

studentRouter.post('/', studentController.add);

studentRouter.delete('/:id', studentController.delete);

studentRouter.get('/sort', studentController.sort)
export default studentRouter;
