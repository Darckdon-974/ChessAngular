export interface ICoup {
    id: number,
    name: string,
}

export class Coup implements ICoup{
    id: number;
    name: string;
    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
}