export class order{
    public customerNo:string;
    public customerName:string;
    public menuType:string;
    public amount: string;
    public date:string;
    


    constructor(customerNo:string,customerName:string,menyType:string,amount: string,date:string){
       this.customerNo=customerNo;
       this.customerName=customerName;
       this.menuType=menyType;
       this.amount=amount;
       this.date=date;
    }
}