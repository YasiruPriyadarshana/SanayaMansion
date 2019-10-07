export class ditem{
    public id:string;
    public decorations:string;
    public quantity:string;
    public supplier: string;
    public date:string;
    public request:string;
    public price:string;


    constructor(id:string,decorations: string, quantity: string,supplier: string, date: string, request: string, price: string){
        this.id=id;
        this.decorations=decorations;
        this.quantity=quantity;
        this.supplier=supplier;
        this.date=date;
        this.request=request;
        this.price=price;
    }
}