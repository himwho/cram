export interface SolverParams{
    [key: string]: any;
    
}

export default class Solver{
    params: SolverParams
    constructor(params?: SolverParams) {
        this.params = params || {};
    }
}