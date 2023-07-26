"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classService_1 = __importDefault(require("../service/classService"));
class ClassController {
    constructor() {
        this.findAll = async (req, res) => {
            let listClass = await this.classService.getAll();
            res.json(listClass);
        };
        this.add = async (req, res) => {
            let listClass = await this.classService.add(req.body);
            res.json(listClass);
        };
        this.delete = async (req, res) => {
            let listClass = await this.classService.delete(req.params.id);
            res.json("Delete Success");
        };
        this.classService = classService_1.default;
    }
}
exports.default = new ClassController();
//# sourceMappingURL=classController.js.map