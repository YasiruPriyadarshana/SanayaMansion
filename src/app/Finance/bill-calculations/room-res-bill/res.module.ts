export class Res{
    public bookId: string;
    public mType: string;
    public noOfPl: number;
    public extra: number;
    public amount: number;

    constructor(bookId:string, mType:string, noOfPl:number,extra:number,amount:number){
        this.bookId=bookId;
        this.mType=mType;
        this.noOfPl=noOfPl;
        this.extra=extra;
        this.amount=amount
    }
    
    
}