export class Quote {
    showDescription: boolean;
    constructor(
    public id: number,
    public name: string,
    public owner:string,
    public author:string,
    public completeDate: Date
    ) { 
        
        this.showDescription=false;
    }
    
}