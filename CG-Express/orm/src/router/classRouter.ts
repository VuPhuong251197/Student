import {Router} from "express";
import classController from "../controller/classController";

const classRouter = Router();
classRouter.get('/', classController.findAll);

classRouter.post('/', classController.add);

classRouter.delete('/:id', classController.delete);
export default classRouter;
