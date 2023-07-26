"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const studentService_1 = __importDefault(require("../service/studentService"));
class StudentController {
    constructor() {
        this.findAll = async (req, res) => {
            let listStudent = await this.studentService.getAll(req.query.name);
            res.json(listStudent);
        };
        this.add = async (req, res) => {
            let listStudent = await this.studentService.add(req.body);
            res.json(listStudent);
        };
        this.delete = async (req, res) => {
            let listStudent = await this.studentService.delete(req.params.id);
            res.json("Delete Success");
        };
        this.sort = async (req, res) => {
            let listStudent = await this.studentService.sort();
            res.json(listStudent);
        };
        this.studentService = studentService_1.default;
    }
}
exports.default = new StudentController();
//# sourceMappingURL=studentController.js.map