export class order{
    public customerNo:string;
    public customerName:string;
    public numberOfPlates:string;
    public menuType:string;
    public welcomeDrinks:string;
    public amount: string;
    public date:string;

    
    


    constructor(customerNo:string,customerName:string,numberOfPlates:string,menyType:string,welcomeDrinks:string,amount: string,date:string){
       this.customerNo=customerNo;
       this.customerName=customerName;
       this.numberOfPlates=numberOfPlates;
       this.menuType=menyType;
       this.welcomeDrinks=welcomeDrinks;
       this.amount=amount;
       this.date=date;
    }
}