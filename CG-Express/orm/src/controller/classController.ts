import {Request, Response} from "express";
import classService from "../service/classService";

class ClassController {
    private classService;

    constructor() {
        this.classService = classService;
    }

    findAll = async (req: Request, res: Response) => {
        let listClass = await this.classService.getAll();
        res.json(listClass);
    }

    add = async (req: Request, res: Response) => {
        let listClass = await this.classService.add(req.body);
        res.json(listClass);
    }

    delete = async (req: Request, res: Response) => {
        let listClass = await this.classService.delete(req.params.id);
        res.json("Delete Success");
    }

}

export default new ClassController();
