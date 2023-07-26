"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = require("../entity/Student");
const data_source_1 = require("../data-source");
const typeorm_1 = require("typeorm");
class StudentService {
    constructor() {
        this.getAll = async (name) => {
            let student = await this.studentRepository.find({
                where: {
                    nameStudent: (0, typeorm_1.ILike)(`%${name}%`)
                }
            });
            return student;
        };
        this.add = async (student) => {
            return await this.studentRepository.save(student);
        };
        this.delete = async (student) => {
            return await this.studentRepository.delete(student);
        };
        this.sort = async () => {
            return await this.studentRepository.find({
                order: {
                    score: "desc"
                }
            });
        };
        this.studentRepository = data_source_1.AppDataSource.getRepository(Student_1.Student);
    }
}
exports.default = new StudentService();
//# sourceMappingURL=studentService.js.map