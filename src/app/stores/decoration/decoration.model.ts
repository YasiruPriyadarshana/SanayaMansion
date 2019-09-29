export class ditem{
    public id:string;
    public item:string;
    public quantity:string;
    public supplier: string;
    public date:string;
    public request:string;
    public price:string;


    constructor(id:string,item: string, quantity: string,supplier: string, date: string, request: string, price: string){
        this.id=id;
        this.item=item;
        this.quantity=quantity;
        this.supplier=supplier;
        this.date=date;
        this.request=request;
        this.price=price;
    }
}