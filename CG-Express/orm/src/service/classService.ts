import {Class} from "../entity/Class";
import {AppDataSource} from "../data-source";

class ClassService {
    private classRepository;
    constructor() {
        this.classRepository = AppDataSource.getRepository(Class);
    }

    getAll = async () => {
        let classs = await this.classRepository.find({
            relations: {
                student: true
            }
        });
        return classs;
    }

    add = async (classs) => {
        await this.classRepository.save(classs)
    }
}

export default new ClassService();
