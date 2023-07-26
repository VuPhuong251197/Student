declare class StudentService {
    private studentRepository;
    constructor();
    getAll: (name: any) => Promise<any>;
    add: (student: any) => Promise<any>;
    delete: (student: any) => Promise<any>;
    sort: () => Promise<any>;
}
declare const _default: StudentService;
export default _default;
