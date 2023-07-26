import {Student} from "../entity/Student";
import {AppDataSource} from "../data-source";
import {ILike} from "typeorm" 

class StudentService {
    private studentRepository;
    constructor() {
        this.studentRepository = AppDataSource.getRepository(Student);
    }

    getAll = async (name) => {
        let student = await this.studentRepository.find({
            where: {
                nameStudent: ILike(`%${name}%`)
            }
        });
        return student;
    }

    add = async (student) => {
       return await this.studentRepository.save(student)
    }

    delete = async (student) => {
        return await this.studentRepository.delete(student)
    }

    sort = async () => {
        return await this.studentRepository.find({
            order: {
                score: "desc"
            }
        })
    }
}

export default new StudentService();
