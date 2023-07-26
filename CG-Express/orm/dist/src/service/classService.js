"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Class_1 = require("../entity/Class");
const data_source_1 = require("../data-source");
class ClassService {
    constructor() {
        this.getAll = async () => {
            let classs = await this.classRepository.find({
                relations: {
                    student: true
                }
            });
            return classs;
        };
        this.add = async (classs) => {
            await this.classRepository.save(classs);
        };
        this.classRepository = data_source_1.AppDataSource.getRepository(Class_1.Class);
    }
}
exports.default = new ClassService();
//# sourceMappingURL=classService.js.map