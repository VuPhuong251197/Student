import {Request, Response} from "express";
import studentService from "../service/studentService";

class StudentController {
    private studentService;

    constructor() {
        this.studentService = studentService;
    }

    findAll = async (req: Request, res: Response) => {
        let listStudent = await this.studentService.getAll(req.query.name);
        res.json(listStudent);
    }

    add = async (req: Request, res: Response) => {
        let listStudent = await this.studentService.add(req.body);
        res.json(listStudent);
    }

    delete = async (req: Request, res: Response) => {
        let listStudent = await this.studentService.delete(req.params.id);
        res.json("Delete Success");
    }

    sort = async (req: Request, res: Response) => {
        let listStudent = await this.studentService.sort()
        res.json(listStudent)
    }
}

export default new StudentController();
