export class Room{
    public no: string;
    public roomType: string;
    public imagePath: string;
    public price: string;

    constructor(no: string, rType: string, imagePath: string, price: string){
        this.no=no;
        this.roomType=rType;
        this.imagePath=imagePath;
        this.price=price;
    }
}