export interface ICoup {
    id: number,
    name: string,
    description: string
}

export class Coup implements ICoup{
    id: number;
    name: string;
    description: string;
    constructor(id: number, name: string, description: string){
        this.id = id;
        this.name = name;
        this.description = description;
    }
}