export class Hall{
    public name: string;
    public imagePath: string;
    public price: string;
    public description: string;

    constructor(name: string, imagePath: string, price: string, description: string){
        this.name=name;
        this.imagePath=imagePath;
        this.price=price;
        this.description=description;
    }
}