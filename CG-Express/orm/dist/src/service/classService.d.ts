declare class ClassService {
    private classRepository;
    constructor();
    getAll: () => Promise<any>;
    add: (classs: any) => Promise<void>;
}
declare const _default: ClassService;
export default _default;
