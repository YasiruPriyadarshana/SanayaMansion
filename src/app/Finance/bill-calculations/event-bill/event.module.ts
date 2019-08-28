export class Event {
    public bookId: string;
    public rType: string;
    public bType: string;
    public noOfDay: number;
    public noOfRooms: number;
    public amount: number;
    

    constructor(bookId:string, rType:string, bType:string,noOfDay:number,noOfRooms:number,amount:number){
        this.bookId=bookId;
        this.rType=rType;
        this.bType=bType;
        this.noOfDay=noOfDay;
        this.noOfRooms=noOfRooms;
        this.amount=amount
    }

}
            